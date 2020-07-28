import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'
import {Link} from 'react-router-dom'
const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt='TamirFlix logo' />
            </Link>
            <Button to="/Cadastro/videos" className="ButtonLink">
                Novo video
            </Button>
        </nav>
    )
}

export default Menu;