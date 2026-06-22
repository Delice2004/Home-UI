import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import ImagesPage from './pages/ImagesPage'
import { ImageProvider } from './context/ImageContext'
import './App.css'
import {
  FiBox,
  FiCamera,
  FiCloud,
  FiFileText,
  FiFilm,
  FiFolder,
  FiImage,
  FiMic,
  FiMusic,
  FiStar,
  FiTrash2,
  FiVideo
} from 'react-icons/fi'

const folders = [
  { name: 'Image', items: '246 Items', icon: FiImage },
  { name: 'Video', items: '246 Items', icon: FiVideo },
  { name: 'Documents', items: '246 Items', icon: FiFileText },
  { name: 'Audio', items: '246 Items', icon: FiMic },
  { name: 'Movies', items: '246 Items', icon: FiFilm },
  { name: 'Assignment', items: '246 Items', icon: FiCamera },
  { name: 'Ui-Kit', items: '246 Items', icon: FiFolder },
  { name: 'Design', items: '246 Items', icon: FiStar }
]

const uploads = [
  ['Onboarding.zip', '23 mb', 8],
  ['Web Design.zip', '45 mb', 44],
  ['Example.zar', '90 mb', 88],
  ['Web Design.zip', '45 mb', 44],
  ['Designing.pptx', '73 mb', 72],
  ['Web Design.zip', '45 mb', 44],
  ['Example.zar', '90 mb', 88],
  ['Designing.pptx', '73 mb', 72]
]

const files = [
  ['Marcus Family.jpg', '16 Oct,11:23m', '12 MB', FiBox],
  ['Work.Doc', '20 Nov,12:40pm', '4.3 MB', FiFileText],
  ['Apha.mkv', '08 Oct,05:45pm', '10 MB', FiVideo],
  ['SVG Logo.png', '04 Jul,10:30pm', '9 MB', FiImage]
]

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <section>
        <h1 className="page-title">Your Folders</h1>
        <div className="folder-grid">
          {folders.map(({ name, items, icon: Icon }) => (
            <article className="folder-card" key={name}>
              <div className="folder-tab" />
              <div className="folder-menu">•••</div>
              <span className="soft-icon"><Icon /></span>
              <h2>{name}</h2>
              <p>{items}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="storage-card">
        <h2>Storage Details</h2>
        <div className="gauge">
          <div className="gauge-ring" />
          <strong>75GB</strong>
          <span>used of 100GB</span>
        </div>
        <StorageRow icon={FiFileText} label="Documents" count="5,674s" color="#3f5cf4" width="64%" />
        <StorageRow icon={FiVideo} label="Videos" count="1,624" color="#19a65a" width="28%" />
        <StorageRow icon={FiImage} label="Images" count="5,515" color="#ff6b1a" width="54%" />
      </aside>

      <section className="chart-card panel-card">
        <div className="panel-header">
          <h2>Activity Chart</h2>
          <span>This year⌄</span>
        </div>
        <div className="chart-wrap">
          <svg viewBox="0 0 720 300" role="img" aria-label="Activity chart">
            {[30, 60, 90, 120, 150, 180, 210, 240].map((y) => (
              <line key={y} x1="60" x2="695" y1={y} y2={y} className="chart-grid" />
            ))}
            <path
              d="M60 120 C105 120 115 245 170 240 C225 235 220 25 290 30 C352 35 338 240 405 240 C468 240 465 120 520 120 C575 120 575 280 615 285 C665 290 660 90 695 70"
              className="chart-line"
            />
            {['90 GB', '80 GB', '70 GB', '60 GB', '50 GB', '40 GB', '30 GB'].map((label, index) => (
              <text key={label} x="10" y={36 + index * 42} className="chart-label">{label}</text>
            ))}
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'].map((label, index) => (
              <text key={label} x={60 + index * 106} y="286" className="chart-label">{label}</text>
            ))}
          </svg>
        </div>
      </section>

      <aside className="upload-card panel-card">
        <h2>Uploading on Drive</h2>
        {uploads.map(([name, size, width], index) => (
          <div className="upload-row" key={`${name}-${index}`}>
            <span>{name}</span>
            <div className="mini-progress"><i style={{ width: `${width}%` }} /></div>
            <strong>{size}</strong>
            <button>×</button>
          </div>
        ))}
      </aside>

      <section className="recent-files panel-card">
        <div className="panel-header">
          <h2>Recently added files</h2>
          <a href="#">View all</a>
        </div>
        <div className="file-table-head">
          <span>Files</span>
          <span>Last Modified</span>
          <span>Size</span>
          <span />
        </div>
        {files.map(([name, date, size, Icon]) => (
          <div className="file-row" key={name}>
            <span className="soft-icon"><Icon /></span>
            <strong>{name}</strong>
            <span>{date}</span>
            <a href="#">{size}</a>
            <FiTrash2 className="trash-icon" />
          </div>
        ))}
      </section>

      <section className="cloud-card panel-card">
        <h2>Cloud Storage</h2>
        <CloudLine icon="◆" label="Drop Box" value="32gb" width="54%" />
        <CloudLine icon="☁" label="One Drive" value="10gb" width="82%" />
        <CloudLine icon="▲" label="Google Drive" value="15gb" width="20%" />
      </section>

      <section className="offer-card panel-card">
        <div className="offer-folder"><FiFolder /></div>
        <h2>Upgrade to Special Offer For Unlimited Storage</h2>
        <button>Buy storage</button>
      </section>
    </div>
  )
}

function StorageRow({ icon: Icon, label, count, color, width }) {
  return (
    <div className="storage-row">
      <span className="storage-icon"><Icon /></span>
      <div>
        <div className="storage-meta">
          <strong>{label}</strong>
          <span>{count}</span>
        </div>
        <div className="storage-progress"><i style={{ background: color, width }} /></div>
      </div>
    </div>
  )
}

function CloudLine({ icon, label, value, width }) {
  return (
    <div className="cloud-line">
      <h3><span>{icon}</span>{label}</h3>
      <div className="cloud-values"><span>{value}</span><span>48gb</span></div>
      <div className="storage-progress"><i style={{ width }} /></div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ImageProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/file-manager/dashboard" replace />} />
          <Route path="/file-manager" element={<AppLayout />}>
            <Route index element={<Navigate to="/file-manager/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="images" element={<ImagesPage />} />
            <Route path="videos" element={<div>Videos (placeholder)</div>} />
            <Route path="documents" element={<div>Documents (placeholder)</div>} />
            <Route path="all-files" element={<div>All Files (placeholder)</div>} />
            <Route path="trash" element={<div>Trash (placeholder)</div>} />
          </Route>
        </Routes>
      </ImageProvider>
    </BrowserRouter>
  )
}
