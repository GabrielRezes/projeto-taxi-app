import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppContext from '../../contexts/appContext';

import {ReactComponent as Icon1} from '../../img/location-icon.svg'
import {ReactComponent as Icon2} from '../../img/list-icon.svg'
import {ReactComponent as Icon3} from '../../img/search-icon.svg'
import {ReactComponent as Icon4} from '../../img/back-icon.svg'
import {ReactComponent as Icon5} from '../../img/search-street-icon.svg'


import './navbar.css'


class Navbar extends Component {
       
    render() {               
        return (            
            <nav className='nav'> 
                <h2 className='nav_title'>MENU</h2>               
                <ul className='nav_ul'>
                    <li>
                        <Link to='/inform-location' className='nav_item'>       
                            <Icon1 className='nav_icon'/>Informe sua Localização
                        </Link>                 
                    </li>
                    <li>
                        <Link to='/list-points' className='nav_item'>
                            <Icon2 className='nav_icon'/>Liste todos os Pontos
                        </Link>
                    </li>
                    <li>    
                        <Link to='/search-closer' className='nav_item'>
                            <Icon3 className='nav_icon'/>Encontre os mais Próximos
                        </Link>
                    </li>
                    <li>
                        <Link to='/search-street' className='nav_item'>
                            <Icon5 className='nav_icon'/>Busca por Logradouro
                        </Link>   
                    </li>
                </ul>   
                <Link to='/' className='nav_item'><Icon4 className='nav_icon'/>Voltar</Link>         
            </nav>                    
        )
        
    }
}

export default Navbar