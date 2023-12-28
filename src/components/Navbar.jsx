import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className=' mr-0 p-10 h-screen fixed'>
            {
                !sidebarOpen ? (
                    <div className='cursor-pointer w-12 h-12 flex items-center justify-center' onClick={handleSidebarOpen}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </div>
                ) : (
                    <>
                        <div className='cursor-pointer w-12 h-12 flex items-center justify-center' onClick={handleSidebarClose} >
                            <span class="material-symbols-outlined">
                                close
                            </span>

                        </div>
                        <h2>The Cookbook</h2>
                        <div className='w-52 pt-6 flex flex-col'>
                            <div className='item animate p-4'>
                                <Link to='/'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        house
                                    </span>
                                    Home
                                </Link>
                            </div>
                            <div className='item animate p-4'>
                                <Link to='/recipes'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        menu_book
                                    </span>
                                    Recipes
                                </Link>
                            </div>
                            <div className='item animate p-4'>
                                <Link to='/drinks'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        glass_cup
                                    </span>
                                    Drinks
                                </Link>
                            </div>
                            <div className='item animate p-4'>
                                <Link to='/meal-plan'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        restaurant_menu
                                    </span>
                                    Meal Plan
                                </Link>
                            </div>
                            <div className='item animate p-4'>
                                <Link to='/my-cookbook'>
                                    <span class="material-symbols-outlined mr-2 align-middle">
                                        auto_stories
                                    </span>
                                    My Cookbook
                                </Link>
                            </div>
                        </div>

                    </>
                )
            }
        </div >
    )
}

export default Navbar
