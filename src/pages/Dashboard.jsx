import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import data from '../data/mock.json'

export default function Dashboard() {
  const [selected, setSelected] = useState(data.users?.[0] || data.user)

  useEffect(()=>{
    const saved = localStorage.getItem('abtalk_user')
    if(saved){
      setSelected(JSON.parse(saved))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('abtalk_user', JSON.stringify(selected))
  },[selected])

  const user = selected
  const firstDay = user.streak === 0 && user.completed === 0
  const missed = user.streak > 0 && user.completed < data.challenge.currentDay - 1

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-pill">A</span>
          <span>ABTalks</span>
        </a>
        <nav>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            {data.users && data.users.map(u => (
              <button key={u.handle} onClick={()=>setSelected(u)} className="nav-link" style={{background:'transparent',border:'none'}}>{u.name.split(' ')[0]}</button>
            ))}
          </div>
        </nav>
      </header>

      <main className="content dashboard-grid">
        <section className="intro-card">
          <p className="eyebrow">Welcome back</p>
          <h1>{user.name || 'Learner'}</h1>
          <p>{firstDay ? 'Start your 60-day streak today.' : missed ? 'You missed a day — you can still recover!' : "Keep your streak going. Today's task is waiting."}</p>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span>🔥 Current streak</span>
            <strong>{user.streak}</strong>
            <span>days</span>
          </div>
          <div className="stat-card">
            <span>🏆 Completed</span>
            <strong>{user.completed}</strong>
            <span>/ {data.challenge.length}</span>
          </div>
        </section>

        <section className="progress-card">
          <div className="progress-header">
            <div>
              <p className="section-label">Today's task</p>
              <h2>{data.challenge.days[0].title}</h2>
            </div>
            <strong>Day {data.challenge.currentDay}</strong>
          </div>
          <p className="task-meta">{data.challenge.days[0].estimate} • {data.challenge.days[0].requirements.length} steps</p>
          <Link className="primary-link" to="/day/12">Open day →</Link>
        </section>

        <section className="task-card">
          <div className="badge-card">
            <div className="badge-icon">🏅</div>
            <div>
              <strong>Standing</strong>
              <p>{user.completed} completed • {user.streak} streak</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
