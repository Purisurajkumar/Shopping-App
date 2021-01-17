import React from "react";
import { Link } from "react-router-dom";
class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={Email:'',Password:'',errormsg:'',}
}
componentDidMount(){
  if(window.sessionStorage.getItem('key')){
    this.props.history.push('/dashboard')
  }
}
Handelchange=(e)=>{
  this.setState({[e.target.name]:e.target.value},()=>console.log(this.state.Email))
}
Handelsubmit=()=>{
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTO26s0wjTmc5UUdDMrVnoK445K7c3LLI',{
    method: 'POST',
   headers:{'Content-Type': 'application/json',},
   body:JSON.stringify({
       email:this.state.Email,
       password:this.state.Password,
       returnSecureToken:true
   })
   }).then((res)=>{
       return res.json()
     }).then((result)=>{
       let token=result.idToken
       console.log(token)
       if(!result.error){
        window.sessionStorage.setItem('key',token) 
         this.props.history.push('/dashboard')
       }else{
        this.setState({errormsg:result.error.message})
       }
      })
      this.setState({Email:'',Password:''})
}
    render(){
    return(
        <div>
          <div>Login</div>
           <div><input type='email' name='Email' value={this.state.Email} placeholder='Enter Email..' onChange={this.Handelchange}/></div>
          <div><input type='password' name='Password' value={this.state.Password} placeholder='Enter Password' onChange={this.Handelchange}/></div>
          <div>{this.state.errormsg?this.state.errormsg:''}</div>
          <div><button onClick={this.Handelsubmit}>Submit</button></div>
          <div><Link to='/'>Not For User:Signup</Link></div>
        </div>
    )
 }
}
export default Login