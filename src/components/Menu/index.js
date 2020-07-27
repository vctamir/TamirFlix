import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import ButtonLink from '../ButtonLink'
import Button from '../Button'
const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt='TamirFlix logo' />
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo video
            </Button>
        </nav>
    )
}

export default Menu;