import React, { Component } from 'react'
export default class ErrorBoundary extends Component {
    constructor(){
        super()
        this.state={
            error:null,
            errorInfo:null,
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info
        })
    }
    render(){
    if(this.state.errorInfo){
        return(
            <div>
                <h1>Oops.... error is their</h1>
                <p>Trying to relode the page</p>
            </div>

        )
    }
    return this.props.children;
}



}
