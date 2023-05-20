import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

import Layout from './layout';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
    return pages[`./pages/${name}.jsx`]
  },

  setup({ el, App, props }) {
    createRoot(el).render(
      <Layout>
        <App {...props} />
      </Layout>
    )
  },
})
