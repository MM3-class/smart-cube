import React from 'react'

const Button = ({ children, style, className }) => {
    return (
        <button className={className}>{children}</button>
    )
}

export default Button