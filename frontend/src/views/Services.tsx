import React from 'react'

const Item = ({ name }: { name: string }) => (
  <div className="h-24 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-sm">
    {name}
  </div>
)

export default function Services() {
  const items = [
    'Taxi',
    'Market',
    'Music',
    'Disk',
    'Cloud',
    'Maps',
    'Food',
    'Weather',
    'Mail',
  ]
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((n) => (
        <Item key={n} name={n} />
      ))}
    </div>
  )
}