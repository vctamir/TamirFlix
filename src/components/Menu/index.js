import React from 'react'
import logo from '../../assets/img/logo.png'
import './menu.css'
import Button from '../Button'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const backgroundLogo = 'https://phillycustomdj.com/wp-content/uploads/2019/05/star-field.png'

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <FundoLogo />
                <img className="Logo" src={logo} alt='TamirFlix logo' />
            </Link>
            <Button to="/Cadastro/videos" className="ButtonLink">
                Novo video
            </Button>
        </nav>
    )
}

export default Menu;


const FundoLogo = styled.img`
  src:${backgroundLogo} ;
  alt:'estrelas' ;
  background-size:'cover';
  position:'absolute';
  left:15;
  top :5;
  width: 300;
  height: 80;
`;