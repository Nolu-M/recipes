import React from 'react'

const Navbar = () => {
    return (
        <div className='p-4'>
            <div className='flex justify-between mb-4'>
                <h1>Welcome Nolubabalo!</h1>
                <div>
                    <input placeholder='search recipes'></input>
                    <button>Search</button>
                </div>
                <div>
                    toggle
                </div>
            </div>
        </div>
    )
}

export default Navbar
