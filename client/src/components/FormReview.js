import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
const FormReview =(props)=>{
    const {firstName, lastName, email,history} = props;
    return (<div>FirstName:{firstName}
    <button onClick={()=>{console.log(history);history.push("/");}}>done</button>
    
    </div>)
}

const mapStateToProps=(state)=>{
    console.log(state);

    return state.form.auth.values;
}
export default (connect(mapStateToProps)(FormReview));