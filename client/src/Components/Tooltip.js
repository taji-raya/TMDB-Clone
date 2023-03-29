import React, { useState } from 'react'
import './TooltipStyle.css'

function Tooltip({ text, children }) {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className='tooltipContainer'
            onMouseEnter={() => { setIsVisible(true) }}
            onMouseLeave={() => { setIsVisible(false) }}
        >
            {children}
            {isVisible && <div className='tooltip'> {text}</div>}
        </div>
    )
}

export default Tooltip
