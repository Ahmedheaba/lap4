import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
class Login extends Component {
    state = { 
        email:"",
        password:"",
        error:""
     }
     login = () =>{
         fetch("https://reqres.in/api/login",{
             method:'POST',
             headers:{
                 "content-type":"application/json"
             },
             body:JSON.stringify(this.state)
         }).then(res => res.json()).then(res=>{
             if(res.error){
                alert(res.error);
             }else
                 alert(res.token);
             
         }).catch(err =>{
             alert(err.error)
         })
     }
     changeInput = (e) =>{
        let statepropname = e.target.name;
        this.setState({[statepropname]:e.target.value})
     }
    render() { 
        return (
            <div className='container'>
                <h1>Login Page</h1>
                    <input type='email'  onChange={this.changeInput} value={this.state.email} name='email' /> <br/>
                    <input type='password' onChange={this.changeInput} value={this.state.psssword} name='password' /> <br/>
                    <button onClick={this.login}>Login</button>
            </div>
        );
    }
}
 
export default Login;