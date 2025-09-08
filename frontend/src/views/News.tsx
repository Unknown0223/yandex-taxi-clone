import React from 'react'

export default function News() {
  const news = [
    { t: 'Texnologiya yangiliklari', d: 'AI bo‘yicha so‘nggi yangiliklar...' },
    { t: 'Bozor', d: 'Kriptovalyuta bozori o‘zgarishlari...' },
    { t: 'Mahalliy', d: 'Shahar markazida yangi loyihalar...' },
  ]
  return (
    <div className="space-y-3">
      {news.map((n, i) => (
        <div key={i} className="card">
          <div className="font-semibold">{n.t}</div>
          <div className="text-sm text-neutral-300 mt-1">{n.d}</div>
        </div>
      ))}
    </div>
  )
}