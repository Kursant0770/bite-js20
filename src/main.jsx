import { createRoot } from 'react-dom/client'
import './index.css'
import Themes from './components/Themes.jsx'
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Themes>
    <App/>
  </Themes>
)
