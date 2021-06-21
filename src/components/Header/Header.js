import React, {Component} from 'react'
import './header.css'
import {ReactComponent as Svg} from '../../img/exit-icon.svg'

class Header extends Component{

    render() {
        return(
            <header className='header'>
                <h1 className='header_title'
                >Táxi App</h1>
                <a className='header_exit'
                >Sair<Svg className='header_icon'/></a>
            </header>           
        )
    }
}

export default Header