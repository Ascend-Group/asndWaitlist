import './boot'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { About } from './app/pages/About'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <About />
  </StrictMode>,
)
