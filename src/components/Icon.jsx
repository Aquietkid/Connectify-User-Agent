import React from 'react'
import './Icon.css';

function Icon({ source, isSelected, onClick }) {

    return (
        <>
            <div className="relative m-5 cursor-pointer w-6 h-6 selection:bg-transparent" onClick={onClick}>
                <img src={source} alt="" />
                {
                    isSelected && <div className='icon-selection-visual absolute -inset-0.75 bg-black rounded-sm -z-10 w-7.5 h-7.5'></div>
                }
            </div>
        </>
    )
}

export default Icon