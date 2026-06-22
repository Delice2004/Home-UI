import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiBell, FiGrid, FiHardDrive, FiImage, FiShoppingBag, FiShield, FiTrash2, FiVideo, FiFileText, FiFolder } from 'react-icons/fi'

const groups = [
  {
    title: 'File Manager',
    items: [
      { to: '/file-manager/dashboard', label: 'Dashboard', icon: FiGrid }
    ]
  },
  {
    title: 'Pages',
    items: [
      { to: '/file-manager/images', label: 'Image', icon: FiImage },
      { to: '/file-manager/videos', label: 'Videos', icon: FiVideo },
      { to: '/file-manager/documents', label: 'Document', icon: FiFileText },
      { to: '/file-manager/all-files', label: 'All Files', icon: FiFolder, badge: '21' },
      { to: '/file-manager/trash', label: 'Trash', icon: FiTrash2 }
    ]
  }
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <FiHardDrive />
        <h3>Hope UI</h3>
      </div>

      <div className="profile-card">
        <img src="https://api.dicebear.com/8.x/notionists/svg?seed=Elon&backgroundColor=eef3ff" alt="Elon musk avatar" />
        <strong>Elon musk</strong>
        <a href="#">@musk</a>
        <div className="profile-actions">
          <button><FiShoppingBag /></button>
          <button><FiShield /></button>
          <button className="notify-dot"><FiBell /></button>
        </div>
      </div>

      <nav className="sidebar-nav">
        {groups.map((g) => (
          <div className="nav-group" key={g.title}>
            <div className="nav-title">{g.title}</div>
            <ul>
              {g.items.map((it) => (
                <li key={it.to}>
                  <NavLink
                    to={it.to}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    <it.icon />
                    <span>{it.label}</span>
                    {it.badge && <em>{it.badge}</em>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
