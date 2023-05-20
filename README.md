# Proyek Akhir Basdat (WIP)

## Persiapan 

Panduan ini menjelaskan tentang persiapan development environment menggungakan Nix Shell. Pastikan menggunakan Linux atau WSL.

Instalasi Nix Package Manager:

```bash
# Linux
sh <(curl -L https://nixos.org/nix/install) --daemon
# WSL
sh <(curl -L https://nixos.org/nix/install) --no-daemon
```

Selanjutnya clone repo ini dan masuk ke folder yang telah dibuat

```bash
git clone git@github.com:izzudd/tugas-akhir-pemweb.git
cd tugas-akhir-pemweb
```

Jalankan perintah berikut untuk menginisialisasi development environment

```bash
nix-shell
```

Selanjutnya silahkan tunggu sebentar sambil ngopi, karena nix perlu mengunduh paket yang diperlukan. Untuk memastikan development environment sudah benar jalankan perintah di bawah ini:

```bash
echo $IN_NIX_SHELL 
# output: impure
```

Terakhir jalankan perintah di bawah ini untuk menginstall paket paket yang diperlukan

```bash
composer install
yarn install
```

Untuk masuk ke VSCode dengan Nix Shell pastikan variabel `$IN_NIX_SHELL` bernilai `impure` lalu ketik perintah berikut:

```bash
code .
```

Jika `$IN_NIX_SHELL` tidak bernilai `impure` jalankan lagi perintah `nix-shell` lalu jalankan perintah di atas.

Sebelum menjalankan server, jangan lupa untuk meng-copy file `.env.example` dan mengubah namanya menjadi `.env`. Perhatian! Jangan hapus file `.env.example`

## Panduan untuk Back End (WIP)

Untuk memulai development silahkan jalankan perintah berikut:

```bash
yarn build
php artisan serve
```

Server akan dimulai pada port 8000

Data yang tertampil merupakan data yang berasal dari file `app/Http/Controllers/ViewController.php`. Untuk daftar route view dapat dilihat pada `routes/web.php`. Data ini sementara merupakan data dummy, selanjutnya perlu dilakukan fetching dari database agar data bisa dinamis. Diharap membuat Controller dan Model baru untuk penanganan data. Silahkan baca dokumentasi laravel untuk informasi lebih lanjut.

- [https://laravel.com/docs/10.x/controllers](https://laravel.com/docs/10.x/controllers)
- [https://laravel.com/docs/10.x/database](https://laravel.com/docs/10.x/database)

## Panduan untuk Front End (WIP)

Front end memerlukan 2 terminal untuk melakukan development. Satu untuk menjalankan server php, dan lainnya untuk menjalankan vite.

```bash
php artisan serve # jalankan di terminal 1
yarn dev # jalankan di terminal 2
```

Server akan dimulai pada port 8000

Pastikan buka terminal 2 (vite) untuk melihat status build dan debug log.

Kode react dapat diakses pada folder `resource/js`. Pada folder ini terdapat beberapa folder lainnya yaitu:

- `pages`: berisi semua page yang akan dirender oleh controller
- `components`: berisi komponen yang dapat diimport ke file lainnya
- `layout.jsx`: file layout global (diterapkan pada semua route)
- `app.jsx`: file endpoint untuk proses rendering (jangan disentuh)

Kode css dapat ditambahkan pada folder `resource/css`. Jika diperlukan dapat dilakukan instalasi css framework dan preprocessor.

File pada `resources/view/app.blade.php` merupakan file endpoint html statis yang akan dirujuk oleh router untuk merender react.
