import React from 'react'

export default function Profile() {
  return (
    <div className="space-y-4">
      <div className="card">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-neutral-800" />
          <div>
            <div className="font-semibold">Foydalanuvchi</div>
            <div className="text-sm text-neutral-400">user@example.com</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="font-semibold mb-2">Sozlamalar</div>
        <ul className="space-y-2 text-sm text-neutral-300">
          <li>• Tillar</li>
          <li>• Mavzu: Dark</li>
          <li>• Bildirishnomalar</li>
        </ul>
      </div>
    </div>
  )
}