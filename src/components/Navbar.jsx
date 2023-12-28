import React, { useState } from 'react';


const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='fixed mr-0 p-10 h-screen'>
            {
                !sidebarOpen ? (
                    <div className='cursor-pointer w-12 h-12 flex items-center justify-center ' onClick={handleSidebarOpen}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                ) : (
                    <>
                        <div className='cursor-pointer w-12 h-12 flex items-center justify-center ' onClick={handleSidebarClose} >
                            <span class="material-symbols-outlined">
                                close
                            </span>

                        </div>
                        <h2>The Cookbook</h2>
                        <div className='w-52 pt-6 flex flex-col'>
                            <div className='item animate p-4'>
                                <a href='/'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        house
                                    </span>
                                    Home
                                </a>
                            </div>
                            <div className='item animate p-4'>
                                <a href='/recipes'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        menu_book
                                    </span>
                                    Recipes
                                </a>
                            </div>
                            <div className='item animate p-4'>
                                <a href='/drinks'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        glass_cup
                                    </span>
                                    Drinks
                                </a>
                            </div>
                            <div className='item animate p-4'>
                                <a href='/meal-plan'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        restaurant_menu
                                    </span>
                                    Meal Plan
                                </a>
                            </div>
                            <div className='item animate p-4'>
                                <a href='/my-cookbook'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        auto_stories
                                    </span>
                                    My Cookbook
                                </a>
                            </div>
                        </div>

                    </>
                )
            }
        </div >
    )
}

export default Navbar
