import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function TabLink({
  to,
  label,
  icon,
}: {
  to: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        'flex flex-col items-center justify-center gap-1 flex-1 py-2 text-xs ' +
        (isActive ? 'text-yx-yellow' : 'text-neutral-400')
      }
    >
      <div className="text-xl">{icon}</div>
      <div>{label}</div>
    </NavLink>
  )
}

export default function AppShell() {
  return (
    <div className="h-full flex flex-col">
      <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="container px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded bg-yx-yellow" />
            <span className="font-semibold">Yandex-like</span>
          </div>
          <a
            href="/search"
            className="px-3 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-sm text-neutral-300"
          >
            Qidirish
          </a>
        </div>
      </header>

      <main className="flex-1 container px-4 py-4">
        <Outlet />
      </main>

      <nav className="sticky bottom-0 z-10 bg-neutral-950/80 backdrop-blur border-t border-neutral-800">
        <div className="container px-2 flex">
          <TabLink to="/" label="Home" icon={<span>🏠</span>} />
          <TabLink to="/search" label="Search" icon={<span>🔎</span>} />
          <TabLink to="/services" label="Services" icon={<span>🧩</span>} />
          <TabLink to="/news" label="News" icon={<span>📰</span>} />
          <TabLink to="/profile" label="Profile" icon={<span>👤</span>} />
        </div>
        <div className="tabbar-safe" />
      </nav>
    </div>
  )
}