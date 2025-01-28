import React from 'react'
import Link from 'next/link'

const Terms = () => {
  return (
    <div>
      <Link href="/terms-and-conditions" >
      <div className='text-center text-bold text-xl'>
        <h3>Terms and conditions</h3>
        </div>
      </Link>
    </div>
  )
}

export default Terms