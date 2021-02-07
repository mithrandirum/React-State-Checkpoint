import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';

export default class App extends Component {
  constructor(props) {
   super (props)
   this.state = { second : 0 , minute : 0 , hour : 0,show : false, person : {
    fullName : "" , bio : "the quest of value behind façades", 
    imgSrc : "./thedude.jpg", profession : "" } 
    
      }
   }
   toggle =  () => { 
    this.setState({
       show : !this.state.show,
       second : 0,
       minute : 0,
       hour : 0
      })      }

    render() {
             
      return (
        <>
        <div style = {{display : "flex", justifyContent : "center"}}>
         <h1> {this.state.second} s : </h1> 
         <h1>{this.state.minute} mn : </h1>
         <h1>{this.state.hour} h</h1>
        </div>
        <div className ="container">
            { this.state.show && (<div className ="profile">
             <h1>{this.state.person.fullName = "Majdi Dabbousi"} </h1>
             <img  src = {this.state.person.imgSrc}/>
             <p><b>BIOGRAPHY :</b> <br></br>{this.state.person.bio =  " social imitation and etiquette encompasse a piece of the puzzle of the  humans  social behavior; to get a good grasp as to what is being referred to  in social sciences as  social mimicry ;  in 18th and 19 th century to the middle of 20 century , discrimination against black people was the social rule / normality in the us ; that ; amongst countless other social etiquettes, was the norme; and whomsoever stood against it or even just expressed the unwllingness to go with the flow, was considered an outcast ; racial discrimination  was considered part of normality "}</p>
             <p><b>Profession :</b>{this.state.person.profession = " on the run for something better"}</p>
       </div> )}
          <button onClick = {this.toggle}>Show/Hide</button>
       </div>
        </>
      )
    }
    
   componentDidMount(){  
      setInterval( ()=> {
     if (this.state.show === true) {this.setState({ second : this.state.second + 1 })} 
     if (this.state.second === 60)  { this.setState({minute : this.state.minute +1 })}
     if (this.state.second === 61)  { this.setState({second : 1})}
     if (this.state.minute === 61)  { this.setState({hour : this.state.hour +1})}
     if (this.state.minute === 61)  {this.setState({minute : 1})}
   
    },1000)
    
   }
 
  }
  