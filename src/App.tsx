import './App.css';
import logo from './assets/logo.png';

export default function App() {
  return <div className='app'>
    <img src={logo} alt="SkyTemple Helper" width={400} />
    <div className='main-box programs'>
      <a href="/sprite-downloader" className='program sprite-downloader'>
        <h2>Sprite Downloader</h2>
      </a>
      <a href="/setanimation-finder" className='program setanimation-finder'>
        <h2>SetAnimation Finder</h2>
      </a>
      <a href="/sprite-scaler" className='program sprite-scaler'>
        <h2>Sprite Scaler</h2>
      </a>
    </div>
  </div>
}