import { useEffect, useRef, useState } from 'react'
import pages from '../data/hiprexPages.json'

export default function ProposalReader() {
  const [index, setIndex] = useState(0)
  const [zoom, setZoom] = useState(false)
  const pageRef = useRef(null)
  useEffect(() => { if (pageRef.current) pageRef.current.scrollTop = 0 }, [index])
  const page = pages[index]
  return <section className="proposal-section" aria-labelledby="proposal-heading">
    <div className="section-heading"><div><p className="eyebrow">RESEARCH PROPOSAL · JANUARY 2026</p><h2 id="proposal-heading">Read the HiPREX proposal.</h2></div><a className="text-link" href="/documents/hiprex/proposal.pdf" target="_blank" rel="noreferrer">Open original PDF ↗</a></div>
    <p className="proposal-note">An architectural proposal, separate from the implemented prototype. Read all {pages.length} pages here.</p>
    <div className="proposal-reader">
      <div className="reader-controls" role="group" aria-label="Proposal reading controls"><button type="button" disabled={index===0} onClick={()=>setIndex(index-1)}>← Previous</button><label>Page <select aria-label="Proposal page" value={index} onChange={event=>setIndex(Number(event.target.value))}>{pages.map((p,i)=><option key={p.number} value={i}>{p.number}</option>)}</select> of {pages.length}</label><button type="button" disabled={index===pages.length-1} onClick={()=>setIndex(index+1)}>Next →</button><button type="button" aria-pressed={zoom} onClick={()=>setZoom(!zoom)}>{zoom?'Fit page':'Enlarge'}</button></div>
      <div ref={pageRef} className={'reader-page '+(zoom?'is-zoomed':'')} tabIndex={0} aria-label="Proposal page; use left and right arrow keys to change pages" onKeyDown={event=>{if(event.key==='ArrowRight'){event.preventDefault();setIndex(i=>Math.min(i+1,pages.length-1))}if(event.key==='ArrowLeft'){event.preventDefault();setIndex(i=>Math.max(i-1,0))}}}>
        <img src={page.image} width={page.width} height={page.height} alt={`HiPREX proposal, page ${page.number}. A text version is available below.`} />
      </div>
      <p className="reader-status" aria-live="polite">Page {page.number} of {pages.length}</p>
      <details className="reader-transcript"><summary>Read this page as text</summary><div>{page.text}</div></details>
    </div>
  </section>
}
