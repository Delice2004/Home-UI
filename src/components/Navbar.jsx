import React from 'react'
import { useLocation } from 'react-router-dom'
import { FiBell, FiChevronLeft, FiFileText, FiHome, FiMaximize2, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'

export default function Navbar() {
  const location = useLocation()
  const current = location.pathname.includes('images') ? 'Image' : 'Dashboard'

  return (
    <header className="topbar">
      <div className="top-left">
        <button className="round-back"><FiChevronLeft /></button>
        <span className="breadcrumb-current">{current}</span>
        <nav className="top-nav">
          <a className={current !== 'Image' ? 'active' : ''} href="/file-manager/dashboard"><FiHome />Home</a>
          <a href="#"><FiFileText />Pages</a>
          <a href="#"><FiBell />Elements</a>
        </nav>
      </div>

      <div className="top-actions">
        <div className="font-switch">
          <span>A</span>
          <strong>A</strong>
          <b>A</b>
        </div>
        <label className="search-box">
          <input placeholder="Search..." />
          <FiSearch />
        </label>
        <div className="round-actions">
          <button className="notify-dot"><FiShoppingCart /></button>
          <button><FiUser /></button>
          <button><FiMaximize2 /></button>
        </div>
      </div>
    </header>
  )
}
