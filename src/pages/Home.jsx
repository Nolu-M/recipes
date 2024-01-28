import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className={`bg-home-page bg-cover bg-center h-screen`}>
            <section className='p-10 flex'>
                <div>
                    <Link to='/main'>
                        <p>The CookBook</p>
                    </Link>
                </div>
            </section>
            <section>
                <div className='flex flex-col items-center mt-12 pt-12'>
                    <h1 className='font-primary text-6xl'>Here is to Making Magic</h1>
                    <p className=' italic text-2xl'>Find the best recipes right here!</p>
                </div>
            </section>
        </div>
    )
}

export default Home
