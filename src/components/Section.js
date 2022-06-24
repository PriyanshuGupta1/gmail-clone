
import React from 'react'
import './Section.css'
function Section({ Icon,title,color,selected}) {
  return (
    <div>
        <div className={`section ${selected && "sectionSelected"}`} style={{
            borderBottom:`3px solid ${color}`,
            color : `${selected && color}`
        }}>
            
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default Section