import { useState } from 'react'
import carrizoPlain from './assets/carrizo-plain.jpg'
import sanGabriel from './assets/san-gabriel-mountains.jpg'

const homeImages = [
  {
    src: carrizoPlain,
    height: 853,
    alt: 'Aerial view of a long, straight ridge and trench cutting across a dry grassy plain',
    caption: 'The San Andreas Fault slicing across the Carrizo Plain, one of the clearest views of the fault anywhere.',
    credit: 'Ikluft',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Kluft-photo-Carrizo-Plain-Nov-2007-Img_0327.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    src: sanGabriel,
    height: 960,
    alt: 'Aerial view of rugged mountains rising above a hazy, fog-covered valley',
    caption: 'The San Gabriel Mountains rising above the hazy San Gabriel Valley at the edge of the LA Basin.',
    credit: 'Ken Lund',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:San_Gabriel_Mountains_and_Foggy_San_Gabriel_Valley,_California_(14331070040).jpg',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
]

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

        {tab.id === 'home' &&
          homeImages.map((img) => (
            <figure key={img.src}>
              <img src={img.src} alt={img.alt} width="1280" height={img.height} loading="lazy" />
              <figcaption>
                {img.caption}{' '}
                <span className="credit">
                  Photo: <a href={img.creditUrl}>{img.credit}</a>,{' '}
                  <a href={img.licenseUrl}>{img.license}</a>
                </span>
              </figcaption>
            </figure>
          ))}
      </main>

      <footer className="site-footer">
        <p>The Geologic History of Southern California &copy; {new Date().getFullYear()}</p>
        <p>Photos from <a href="https://commons.wikimedia.org/">Wikimedia Commons</a>, credited under each image.</p>
      </footer>
    </>
  )
}

export default App
