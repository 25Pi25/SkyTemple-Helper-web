import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpriteDownloader from './components/SpriteDownloader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="sprite-downloader" element={<SpriteDownloader />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
