import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import App from "./App.jsx";



// ajout du contenu de App.jsx dans le contener avec l'id 'root' dans index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
