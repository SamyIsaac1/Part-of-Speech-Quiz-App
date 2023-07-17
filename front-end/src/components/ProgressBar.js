import React from 'react'

export default function ProgressBar({progress}) {
  return (
    <div className="progress-bar">
        <div className="progress-bar-inner flex-center" style={{width:`${progress}%`}}></div>
      </div>
  )
}
