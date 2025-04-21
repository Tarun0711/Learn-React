import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(){
        super()
        console.log("constructer")
        this.state={
            count:0,
            name:"tarun"
        }
    }
    static getDrivedStateFromProps(props,state){
        return{name:props.namee}
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
       if (nextState.count>=10){
        alert("u have reached level 10")
return false
        }
        return true;
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevState,prevProps)
        if(prevState.count===7){
            this.setState({name:"u have reached level 7"})
        }
        clearInterval(this.interval)
        this.interval=setInterval(()=>{
            console.log("hii")

        },3000)
    }
  
        
    
    componentDidMount(){
        console.log("mounting")
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Incriment</button>
      </div>
    )
  }
}
