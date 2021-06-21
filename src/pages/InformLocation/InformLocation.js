import React, {Component} from 'react'

import './informLocation.css'

class InformLocation extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    setLatitude({target}) {
        this.setState({latitude: target.value})        
    }

    setLongitude({target}) {
        this.setState({longitude: target.value})          
    }

    handleLocation(event) {
        event.preventDefault()
        const latitudeRegex = /^-?\d{2}[,\.]\d{10}/
        const longitudeRegex = /^-?\d{2,3}[,\.]\d{10}/

        const isLatitudeValid = latitudeRegex.test(this.state.latitude)
        const isLongitudeValid = longitudeRegex.test(this.state.longitude)
        
        console.log(isLatitudeValid, isLongitudeValid)
        
        return isLatitudeValid && isLongitudeValid ? this.saveLocation() : console.log('Deu ruim')
    }    

     saveLocation () {
        // corrigir erro
         window.fetch('http://localhost:8080/save-location/', {
            method: "POST",
            headers: {
                "Content-Type:": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                latitude:this.state.latitude,
                longitude:this.state.longitude
            })
        })
    }


    render() {
        return(
            <form 
                className='form'
                onSubmit={this.handleLocation.bind(this)}    
            >
                <fieldset className='form_field'>
                    <legend className='form_legend'>Insira sua Localização</legend>
                    <label className='form_label' htmlFor='input-long'>Digite sua Latitude</label>  
                    <input
                        value={this.state.lat}  
                        onChange={this.setLatitude.bind(this)}
                        className='form_input'
                        type='text'
                        name='input-long'
                        placeholder='Ex: -30,023927'/>  

                    <label className='form_label' htmlFor='input-lati'>Digite sua Longitude</label>  
                    <input 
                        value={this.state.lon}
                        onChange={this.setLongitude.bind(this)}
                        className='form_input'
                        type='text'
                        name='input-lati'
                        placeholder='Ex: -51,219871'/>  
                
                    <button className='form_btn' type='submit'>Procure os Pontos mais próximos a Você</button>
                    
                </fieldset>
            </form>           
        )
    }
}

export default InformLocation