import React, { Component } from 'react';
import '../App.css';


import menu1 from '../res/menu1.png';
import menu2 from '../res/menu2.png';
import menu3 from '../res/menu3.png';

class Carta extends Component {

    state = {
    }

  
    componentDidMount() {
    
    }
   
    render() {
        const mystyle = {            
        }
        const imgStyle = {
            'width':'100%',
        }
        return (
           <div style={mystyle} class="share" >
               <img  style={imgStyle} src={menu1}/>
               <img  style={imgStyle} src={menu2}/>
               <img  style={imgStyle} src={menu3}/>
               
           </div>
   
        )

    };
}

export default Carta;
