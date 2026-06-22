import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  FiBell,
  FiChevronLeft,
  FiChevronRight,
  FiFileText,
  FiHome,
  FiLayers,
  FiMaximize2,
  FiSearch,
  FiShoppingCart,
  FiUser
} from 'react-icons/fi'

const fontSizes = [14, 16, 18]

const topMenus = [
  {
    label: 'Home',
    href: '/file-manager/dashboard',
    icon: FiHome,
    items: ['Dashboard', 'Analytics', 'Crypto', 'File Manager', 'CRM']
  },
  {
    label: 'Pages',
    href: '#',
    icon: FiFileText,
    items: ['Special Pages', 'Auth Skins', 'User', 'Utilities', 'Plugins']
  },
  {
    label: 'Elements',
    href: '#',
    icon: FiLayers,
    items: ['Components', 'Widgets', 'Forms', 'Tables', 'Icons']
  }
]

export default function Navbar() {
  const location = useLocation()
  const current = location.pathname.includes('images') ? 'Image' : 'Dashboard'
  const [selectedSize, setSelectedSize] = useState(16)

  useEffect(() => {
    document.documentElement.style.setProperty('--app-font-size', `${selectedSize}px`)
  }, [selectedSize])

  return (
    <header className="topbar">
      <div className="top-left">
        <button className="round-back"><FiChevronLeft /></button>
        <span className="breadcrumb-current">{current}</span>
        <nav className="top-nav">
          {topMenus.map(({ label, href, icon: Icon, items }) => (
            <div className="top-dropdown" key={label}>
              <a className={label === 'Home' && current !== 'Image' ? 'active' : ''} href={href}>
                <Icon />
                {label}
              </a>
              <div className="dropdown-menu">
                {items.map((item) => (
                  <a href="#" key={item}>
                    <span>{item}</span>
                    <FiChevronRight />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      <div className="top-actions">
        <div className="font-switch">
          {fontSizes.map((size, index) => {
            const Tag = index === 0 ? 'span' : index === 1 ? 'strong' : 'b'
            const isActive = selectedSize === size
            return (
              <Tag
                key={size}
                className={`font-button ${isActive ? 'active' : ''}`}
                style={{ fontSize: `${size}px` }}
                onClick={() => setSelectedSize(size)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedSize(size)
                  }
                }}
                aria-label={`Set font size to ${size}px`}
                aria-pressed={isActive}
              >
                A
              </Tag>
            )
          })}
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
