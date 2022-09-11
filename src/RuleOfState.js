import React from "react";

//updating state
class Appstate extends React.Component{
    constructor(args){
        super(args);    
        this.state={lat:null, errorMessage:''};
        

        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({ lat:position.coords.latitude});
            },                            
            err=>{
                this.setState({errorMessage:err.message})
            }
       );
    }
    //Alternate babeljs.io
    state={lat:null, errorMessage:''};
    componentDidMount(){
        console.log('hello world');
        window.navigator.geolocation.getCurrentPosition(
            position=> this.setState({ lat:position.coords.latitude}),                            
            err=>this.setState({errorMessage:err.message})
        );
    }
    componentDidUpdate(){
        console.log('hello universe');
    }
    componentWillUnmount(){
        console.log('hello galaxy');
    }

  render(){
    if(this.state.errorMessage && !this.state.lat){
        return<div>Error:{this.state.errorMessage}</div>
    }
    if(!this.state.errorMessage && this.state.lat){
        return<div>Latitude:{this.state.lat}</div>
        
    }
  };
};


export default Appstate;