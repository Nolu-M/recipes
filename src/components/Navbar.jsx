import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h1>Welcome Nolubabalo!</h1>
                <div>
                    <input placeholder='search recipes'></input>
                    <button>Search</button>
                </div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
