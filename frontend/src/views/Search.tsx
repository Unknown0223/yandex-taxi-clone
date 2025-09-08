import React, { useState } from 'react'

export default function Search() {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<string[]>([])

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const mock = Array.from({ length: 6 }).map((_, i) => `${q} natija ${i + 1}`)
    setResults(mock)
  }

  return (
    <div className="space-y-4">
      <form onSubmit={onSearch} className="flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="So‘zni kiriting"
          className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 outline-none"
        />
        <button className="px-4 py-3 rounded-lg bg-yx-yellow text-black font-medium">
          Qidir
        </button>
      </form>

      <div className="space-y-2">
        {results.map((r, i) => (
          <div key={i} className="card">{r}</div>
        ))}
      </div>
    </div>
  )
}