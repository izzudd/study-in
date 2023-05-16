let 
  pkgs = import (builtins.fetchTarball {
    # release 22.11: 12 May 23
    url = "https://github.com/NixOS/nixpkgs/archive/062061744fcf9cedb11a9e2d2198ef0adfbd516f.tar.gz";
  }) {};
in pkgs.mkShell {
  buildInputs = with pkgs; [ 
    mariadb
    php
    phpPackages.composer
    nodejs
    yarn
  ];
  shellHook = ''
    MYSQL_BASEDIR=${pkgs.mariadb}
    MYSQL_HOME=$PWD/.nix-mysql
    MYSQL_DATADIR=$MYSQL_HOME/data
    export MYSQL_UNIX_PORT=$MYSQL_HOME/mysql.sock
    MYSQL_PID_FILE=$MYSQL_HOME/mysql.pid
    alias mysql='mysql -u root'

    if [ ! -d "$MYSQL_HOME" ]; then
      # Make sure to use normal authentication method otherwise we can only
      # connect with unix account. But users do not actually exists in nix.
      mysql_install_db --auth-root-authentication-method=normal \
        --datadir=$MYSQL_DATADIR --basedir=$MYSQL_BASEDIR \
        --pid-file=$MYSQL_PID_FILE
    fi

    # Starts the daemon
    mysqld --datadir=$MYSQL_DATADIR --pid-file=$MYSQL_PID_FILE \
      --socket=$MYSQL_UNIX_PORT 2> $MYSQL_HOME/mysql.log &
    MYSQL_PID=$!
    echo $MYSQL_PID

    finish()
    {
      mysqladmin -u root --socket=$MYSQL_UNIX_PORT shutdown
      kill $MYSQL_PID
      wait $MYSQL_PID
    }
    trap finish EXIT
  '';
}