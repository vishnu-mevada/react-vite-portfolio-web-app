import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './assets/css/animate.css';
import './assets/css/bootsnav.css';
import './assets/css/responsive.css';
import './assets/css/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
