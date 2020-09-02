import React from 'react'
import s from "./styleHeader.module.css"


const Header = () => {
    return (
        <div>
            <div className={s.HEADER}>
                <h1>
                    PokeDex
                </h1>
            </div>
        </div>
    )
}

export default Header;
