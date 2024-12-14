import React from 'react'

function Card({ title, value }: { title: string, value: string }) {
  return (
    <div className='f05-dash-card'>
      <h4 className='text-center'>{title}</h4>
      <p className='font-bold text-primary-b-300 text-lg'>{value}</p>
    </div>
  )
}

export default Card
