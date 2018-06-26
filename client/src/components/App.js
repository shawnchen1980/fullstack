import React,{Component} from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import axios from 'axios';
import AuthForm from './AuthForm';
import AppContainer from './AppContainer';
import DashBoard from './DashBoard/DashBoard';
import 'normalize.css';
import './App.css';
const AppFrame=(props)=>(<div>this is header<div>this is body</div></div>);
const Aux = (props)=>props.children;
class App extends Component {
    constructor(props){
        super(props);
        const persons=[{id:1,name:'tom'},{id:2,name:'jerry'},{id:3,name:'mike'}];
        this.state={message:"no message",persons:persons}
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        //axios.get('/local').then(res=>this.setState({message:res.data}));
        this.setState({})
    }
    handleSubmit=(values)=>{
        console.log(values);
        //history.pushState()
    }
    render(){
        
           return  <BrowserRouter>
            <AuthForm/> 
            </BrowserRouter>
        
    }
}

export default App;