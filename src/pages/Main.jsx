import MainLayout from '../layouts/MainLayout'



const main = () => {
    return (
        <>
            <MainLayout >
                <div className={`bg-main-page bg-cover bg-center h-screen`}>
                    <div className='container mx-auto flex justify-center pt-10'>
                        <p>Welcome Nolu!</p>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}

export default main
