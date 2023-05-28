import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { router } from '@inertiajs/react';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
    return pages[`./pages/${name}.jsx`]
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <div>
        <button onClick={() => router.post('logout')}>logout</button>
        <App {...props} />
<<<<<<< HEAD
        
      </Layout>
=======
      </div>
>>>>>>> b7a9f0eee04f2b981b3e7197729617ad4762d0bd
    )
  },
})
