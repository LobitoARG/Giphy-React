import Card from "./Card";
import React, {Component} from 'react'

//const dotenv = require('dotenv')

class Row extends Component{
    constructor(){
        super()
        this.state={
            gifList: []
        }
    }

    componentDidMount(){
        
        fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_API_KEY}&limit=10&rating=g`)
        //console.log(resultado)
        .then(respuesta =>{
            //console.log(respuesta)
            return respuesta.json()
        })
        .then(gif =>{
            //console.log(gif);
            this.setState({gifList: gif.data})
        })
        .catch(error=>console.log(error))
    }



    render(){
        return(
            <div className="row text-center">
                {
                    this.state.gifList.map((gif,index)=>{
                        return <Card {...gif} key={index}/>
                    })
                }
                
                
            </div>
        )
    }
}

export default Row;