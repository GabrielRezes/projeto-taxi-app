import React, {Component} from 'react';
import './searchStreet.css'

class SearchStreet extends Component {
    constructor(props) {
        super(props)        
        this.state = {
            street: '',  
            address: [],   
        };
    }

    setStreet({target}) {
        this.setState({street: target.value});
        this.searchStreet();        
    }

    async searchStreet() {  
        const address = await fetch(`http://localhost:8080/search/${this.state.street}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            }
        }) 
        .then(res => res.json());          
              
        if(address !== []){
            this.setState({address: address});  
            console.log('aqui é o state: ' + this.state.address);                         
        }    
    } 


    render() {
        return(
            <section className='section'>
                <form className='form'>
                    <fieldset className='form_field'>
                        <legend className='form_legend'>Insira o Nome da Rua</legend>
                        <input
                            value={this.state.street} 
                            onChange={this.setStreet.bind(this)}
                            className='form_input'
                            placeholder='... '
                            type='text'>
                        </input> 
                        <button 
                            className='form_btn'
                            onClick={this.searchStreet.bind(this)}>Buscar
                        </button>
                    </fieldset>                    
                </form>        
                <table className='table'>
                    <thead className='thead'>
                        <tr className='tr'>
                            <th className='th'>Ponto</th>               
                            <th className='th'>Telefone</th>               
                            <th className='th'>Rua</th>               
                            <th className='th'>Número</th>               
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {this.state.address.map((l, i) => {
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

export default SearchStreet;
