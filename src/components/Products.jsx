import React from 'react'
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
        <p>This is Products Page</p><Link className='underline' to="/">go to dashboard</Link>
    </div>
  )
}
