import React, {Component} from 'react'
import {ReactComponent as IconTaxi} from '../../img/taxi-icon.svg'

import './home.css'

// apenas renderização de componente por enquanto

class Home extends Component {
    
    render() {
        return(
            <>
            <main className='main'>
                <h3 className='main_title'>Pronto para pegar seu Táxi?</h3>
                <p className='main_p'>Prático e Rápido.</p>
            </main>
            <IconTaxi className='taxi-icon'/>            
            </>
        )
    }
}

export default Home