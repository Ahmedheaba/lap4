import React, { Component } from 'react';

class Register extends Component {
    state = { 
        email:"",
        password:"",
        error:""
     }
     register = () =>{
         fetch("https://reqres.in/api/register",{
             method:"POST",
             headers:{
                "content-type":"application/json"
            },
             body:JSON.stringify(this.state)
         }).then(res => res.json()).then(res =>{
            if(res.error){
                alert(res.error)
            }else
            alert(res.token)
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
            <div>
            <h1>Register Page</h1>
                <input type='email' value={this.state.email} placeholder='UserName' name='email' onChange={this.changeInput} />
                <input type='password' value={this.state.password} placeholder='Password' name='password' onChange={this.changeInput} />
                <button onClick={this.register}>Register</button>
            </div>
         );
    }
}
 
export default Register;