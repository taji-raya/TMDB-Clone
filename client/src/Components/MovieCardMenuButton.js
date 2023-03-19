import React from 'react'
import { useState } from 'react'
import './MovieCardMenuButtonStyle.css'
const MovieCardMenuButton = () => {
    const Menus = ['Favorite', 'Watchlist']
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='menuButton'>
                <button onClick={() => setOpen(!open)} />
            </div>
            {
                open && (
                    <div className='dropdownMenu'>
                        <ul>
                            {Menus.map((menu) => (
                                <div key={menu}>
                                    <li key={menu} className='listItem'
                                        onClick={() => setOpen(false)}> {menu} </li>
                                    <br />
                                </div>
                            ))
                            }
                        </ul>

                    </div>
                )
            }


        </>
    )
}

export default MovieCardMenuButton
