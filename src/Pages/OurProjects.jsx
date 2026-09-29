import React from 'react'
import Projects from '../Nav-Footer/Projects'
import { Outlet } from 'react-router-dom'

function OurProjects () {
  return (
    <div>
      <Projects />

      {/* outlet for renders components iinside Our projects components   */}
      <Outlet />
    </div>
  )
}

export default OurProjects
