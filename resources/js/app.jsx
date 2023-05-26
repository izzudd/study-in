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
      </div>
    )
  },
})
