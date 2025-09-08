import React from 'react'
import { Link } from 'react-router-dom'

const QuickLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="rounded-xl px-4 py-3 bg-neutral-900 border border-neutral-800 text-sm"
  >
    {label}
  </Link>
)

export default function Home() {
  return (
    <div className="space-y-4">
      <div className="card">
        <input
          placeholder="Qidirish..."
          className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 outline-none"
        />
        <div className="mt-3 flex gap-2 flex-wrap">
          <QuickLink to="/news" label="Yangiliklar" />
          <QuickLink to="/services" label="Servislar" />
          <QuickLink to="/profile" label="Profil" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { to: '/services', label: 'Taxi' },
          { to: '/services', label: 'Market' },
          { to: '/services', label: 'Music' },
          { to: '/services', label: 'Maps' },
          { to: '/news', label: 'News' },
          { to: '/profile', label: 'Wallet' },
        ].map((i) => (
          <Link
            key={i.label}
            to={i.to}
            className="h-24 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sm"
          >
            {i.label}
          </Link>
        ))}
      </div>

      <div className="card">
        <div className="font-semibold mb-2">Tavsiya etilganlar</div>
        <ul className="space-y-2 text-sm text-neutral-300">
          <li>• Siz uchun mos xizmatlar</li>
          <li>• Mashhur qidiruvlar</li>
          <li>• Joylashuvga asoslangan tavsiyalar</li>
        </ul>
      </div>
    </div>
  )
}