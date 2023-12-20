import React, { useState } from 'react';


const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarOpen = () => {
        setSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setSidebarOpen(false);
    };

    return (
        <div className='fixed mt-1/2 mr-0 -translate-y-1/2'>
            {!sidebarOpen ? (
                <div className='cursor-pointer w-12 h-12 flex items-center justify-center animate-fadeIn duration-300 ease-in-out' onClick={handleSidebarOpen}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </div>
            ) : (
                <>
                    <div className='cursor-pointer w-12 h-12 flex items-center justify-center animate-fadeIn duration-300 ease-in-out' onClick={handleSidebarClose} >
                        <span class="material-symbols-outlined">
                            close
                        </span>
                        <h2>The Cookbook</h2>
                    </div>
                    <div className='w-52 p-2.5 flex flex-col '>
                        <div className='item animate'>
                            <a href='/'>
                                <span class="material-symbols-outlined">
                                    house
                                </span>
                                Home
                            </a>
                        </div>
                        <div className='item animate'>
                            <a href='/recipes'>
                                <span class="material-symbols-outlined">
                                    menu_book
                                </span>
                                Recipes
                            </a>
                        </div>
                        <div className='item animate'>
                            <a href='/drinks'>
                                <span class="material-symbols-outlined">
                                    glass_cup
                                </span>
                                Drinks
                            </a>
                        </div>
                        <div className='item animate'>
                            <a href='/meal-plan'>
                                <span class="material-symbols-outlined">
                                    restaurant_menu
                                </span>
                                Meal Plan
                            </a>
                        </div>
                        <div className='item animate'>
                            <a href='/my-cookbook'>
                                <span class="material-symbols-outlined">
                                    auto_stories
                                </span>
                                My Cookbook
                            </a>
                        </div>
                    </div>

                </>
            )}
        </div>
    )
}

export default Sidebar
