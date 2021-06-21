
import React, {Component} from 'react'
import AppContext from '../../contexts/appContext'

import App from '../../App'

import './listPoints.css'

class ListPoints extends Component {
    static contextType = AppContext;

    constructor(props) {
        super(props) 
        this.state = {
            list:[],                
        }  
    }    
    
    async componentDidMount(){
        const list = await fetch('http://localhost:8080/list/')
            .then(res => res.json())
            .catch(e => console.log('Erro:', e))                         

        this.setState({list})       
    }   
    
    render() {
        return(
            <section className='section'>
                <table className='table'>
                    <thead className='thead'>
                        <tr className='tr'>
                            <th className='th'>Ponto</th>               
                            <th className='th'>Telefone</th>               
                            <th className='th'>Rua</th>               
                            <th className='th'>Número</th>               
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map((l, i) => {
                        return (
                            <tr className='tr' key={i}>
                                <td className='td td_point'>{l[2]}</td>
                                <td className='td td_phone'>{l[3]}</td>
                                <td className='td td_name'>{l[4]}</td>
                                <td className='td td_num'>{l[5]}</td>                        
                            </tr> 
                        )        
                        })}
                    </tbody>    
                </table>
            </section>
        )
    }
}

export default ListPoints