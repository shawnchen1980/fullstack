import React,{Component} from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import {reduxForm} from 'redux-form';
import axios from 'axios';
import AuthForm from './AuthForm';
import FormReview from './FormReview';
const AppFrame=(props)=>(<div>this is header<div>this is body</div></div>);
class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state={message:"no message"}
        
    }
    handleClick(){
        //axios.get('/local').then(res=>this.setState({message:res.data}));
        this.setState({})
    }
    handleSubmit=(values)=>{
        console.log(values);
        this.props.history.push('/new/foo');
        //history.pushState()
    }
    render(){
       
        return <div>
        
           


                <Link to="/new/form">to the form</Link>
                <Link to="/new/foo">to the foo</Link>
                <Route path="/new/form" render={()=><AuthForm onSubmit={this.handleSubmit}/>}/>
                <Route path="/new/foo" component={FormReview}/>
           
        </div>
    }
}

export default reduxForm({
    form:"auth"
})(AppContainer);