import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black p-4 text-white'>
        <ul className='flex gap-x-2 justify-end'>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar