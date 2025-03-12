import { root } from '@lynx-js/react'
import { BaseLayout } from './layout.jsx'
import { MemoryRouter, Routes, Route } from 'react-router'
import { Home } from './pages/home/index.jsx'

root.render(
  <BaseLayout>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  </BaseLayout>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
