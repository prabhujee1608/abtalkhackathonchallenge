import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import data from '../data/mock.json'
import SubmitForm from '../components/SubmitForm'

export default function Day(){
  const { day } = useParams()
  const d = data.challenge.days.find(x=>String(x.day)===String(day)) || data.challenge.days[0]
  const [submitted,setSubmitted] = useState(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <Link className="brand" to="/dashboard">
          <span className="brand-pill">A</span>
          <span>ABTalks</span>
        </Link>
        <nav>
          <Link className="nav-link" to="/">Home</Link>
        </nav>
      </header>

      <main className="content">
        <section className="intro-card">
          <p className="eyebrow">Day {d.day}</p>
          <h1>{d.title}</h1>
          <p className="task-meta">{d.estimate} • {d.requirements.length} steps</p>
        </section>

        <section className="task-card">
          <p>{d.description}</p>
          <ul>
            {d.requirements.map((r,i)=>(<li key={i}>{r}</li>))}
          </ul>
        </section>

        <section className="progress-card">
          <p className="section-label">Submit proof of work</p>
          <p style={{color:'#cbd5e1'}}>Add either a GitHub commit/repo URL or a LinkedIn post URL.</p>
          <SubmitForm onSubmit={()=>setSubmitted(true)} />
          {submitted && <div style={{color:'#34d399',marginTop:12}}>Thanks — your submission is recorded locally.</div>}
        </section>
      </main>
    </div>
  )
}
