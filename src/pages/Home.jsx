import React from 'react'

const Home = () => {
    return (
        <div className={`bg-home-page bg-cover bg-center h-screen`}>
            <section className='p-10 flex'>
                <div>
                    <p>The CookBook</p>
                </div>
            </section>
            <section>
                <div className='flex flex-col items-center mt-12 pt-12'>
                    <h1>Let's Make Magic</h1>
                </div>
            </section>
        </div>
    )
}

export default Home
