import React from 'react'

function DashCard({ title, value }: { title: string, value: string }) {
  return (
    <div className='f05-dash-card'>
      <h4 className=''>{title}</h4>
      <p className='font-bold text-primary-b-300 text-lg'>{value}</p>
    </div>
  )
}

export default DashCard
