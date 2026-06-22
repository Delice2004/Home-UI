import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function AppLayout() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-shell">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
        <footer className="app-footer">
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
          <p>(c) Hope UI, Made with love by <a href="#">IQONIC Design.</a></p>
        </footer>
      </div>
      <div className="floating-tab buy-tab">Buy Now</div>
      <button className="floating-cog" aria-label="Settings">Settings</button>
      <div className="floating-tab landing-tab">Landing Pages</div>
    </div>
  )
}
