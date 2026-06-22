import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

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
          <p>© Hope UI, Made with ♥ by <a href="#">IQONIC Design.</a></p>
        </footer>
      </div>
      <div className="floating-tab buy-tab">▣ Buy Now</div>
      <button className="floating-cog">⚙</button>
      <div className="floating-tab landing-tab">Landing Pages</div>
    </div>
  )
}
