import React, {useState} from 'react'

export default function SubmitForm({onSubmit}){
  const [repo,setRepo] = useState('')
  const [post,setPost] = useState('')
  const [status,setStatus] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    if(!repo && !post){
      setStatus('Please provide at least one URL.')
      return
    }
    const payload = {repo,post,when: new Date().toISOString()}
    setStatus('Submitted — saved locally')
    localStorage.setItem('lastSubmission', JSON.stringify(payload))
    onSubmit && onSubmit(payload)
  }

  return (
    <form onSubmit={handleSubmit} style={{display:'grid',gap:12}}>
      <label style={{fontSize:12,color:'#94a3b8'}}>GitHub repo or commit URL</label>
      <input value={repo} onChange={e=>setRepo(e.target.value)} placeholder="https://github.com/you/repo/commit/..." />

      <label style={{fontSize:12,color:'#94a3b8'}}>LinkedIn post URL</label>
      <input value={post} onChange={e=>setPost(e.target.value)} placeholder="https://www.linkedin.com/posts/..." />

      <div style={{display:'flex',gap:8}}>
        <button className="primary-link" type="submit">Submit proof</button>
        <button type="button" onClick={()=>{setRepo('');setPost('');setStatus('')}} style={{background:'transparent',color:'#93c5fd'}}>Clear</button>
      </div>

      {status && <div style={{color:'#38bdf8'}}>{status}</div>}
    </form>
  )
}
