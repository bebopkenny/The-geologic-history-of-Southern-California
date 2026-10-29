import { useState } from 'react'

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'before', label: 'Before the San Andreas' },
  { id: 'transform', label: 'Birth of the Transform Boundary' },
  { id: 'ranges', label: 'Building the Ranges and the LA Basin' },
  { id: 'ice-age', label: 'Ice Age to Today' },
  { id: 'sources', label: 'Sources' },
]

function App() {
  const [active, setActive] = useState(0)

  // arrow keys move between tabs, like a normal tab widget
  function onKeyDown(e) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    if (!step) return
    const next = (active + step + tabs.length) % tabs.length
    setActive(next)
    document.getElementById(`tab-${tabs[next].id}`).focus()
  }

  const tab = tabs[active]

  return (
    <>
      <header className="site-header">
        <h1>The Geologic History of Southern California</h1>
        <p className="subtitle">From ancient subduction to the San Andreas, about 200 million years ago to today</p>
      </header>

      <nav className="tabs" role="tablist" aria-label="Sections" onKeyDown={onKeyDown}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main id={`panel-${tab.id}`} role="tabpanel" aria-labelledby={`tab-${tab.id}`} className="panel">
        <h2>{tab.label}</h2>
        <p>Content coming soon.</p>
      </main>
    </>
  )
}

export default App
