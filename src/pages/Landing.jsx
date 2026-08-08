import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data/mock.json'

export default function Landing() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-pill">A</span>
          <span>ABTalks</span>
        </a>
        <nav>
          <Link className="nav-link" to="/dashboard">
            Sign in
          </Link>
        </nav>
      </header>

      <main className="content">
        <section className="intro-card">
          <p className="eyebrow">60-Day Coding Challenge</p>
          <h1>Ship something small, every day.</h1>
          <p>
            Join thousands of students building consistency with daily mini-projects—perfect for late-night learning on your phone.
          </p>
          <div style={{display:'flex',gap:12,marginTop:18}}>
            <Link className="primary-link" to="/dashboard">Start your challenge</Link>
            <a style={{alignSelf:'center',color:'#93c5fd'}} href="#why">Why it works</a>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span>🔥 Track</span>
            <strong>60 days</strong>
            <span>commit + post</span>
          </div>
          <div className="stat-card">
            <span>👩‍💻 For</span>
            <strong>College students</strong>
            <span>India-friendly</span>
          </div>
        </section>

        <section className="progress-card" id="why">
          <p className="section-label">Why ABTalks</p>
          <h2>Practice, visibility, momentum</h2>
          <p>
            Small daily wins build skills and a public portfolio. We help you keep the streak with simple, achievable daily tasks and easy proof-of-work submission.
          </p>
        </section>

        <section className="task-card">
          <div className="task-header">
            <div>
              <p className="section-label">Sample task</p>
              <h2>{data.challenge.days[0].title}</h2>
            </div>
            <div className="task-tag">Day {data.challenge.currentDay}</div>
          </div>
          <p>{data.challenge.days[0].description}</p>
          <Link className="primary-link" to="/day/12">Open day 12 →</Link>
        </section>

        <section className="badge-card">
          <div className="badge-icon">✨</div>
          <div>
            <strong>Designed for phones</strong>
            <p>Minimal inputs, clear CTAs, and optimistic UX for late-night learners.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
