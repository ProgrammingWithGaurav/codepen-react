import React, { useState } from 'react'
import Editor from './components/Editor'

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  return (
    <>
      <div className="pane top-pane">
        <Editor language='xml' displayName='HTML' value={html} onChange={setHtml} />
        <Editor language='xml' displayName='css' value={css} onChange={setCss} />
        <Editor language='xml' displayName='javascript' value={js} onChange={setJs} />

      </div>
      <div className="pane">
        <iframe title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%"></iframe>
      </div>
    </>
  );
}

export default App;
