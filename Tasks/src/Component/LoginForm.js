//Loginform functional comp

import React from 'react'
import { useState } from 'react';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,pwd);
    }
    
  return (
    <div>
        <form>
            <input type='email' onChange={e => setEmail(e.target.value)} />
            <input type='password' onChange={e => setPwd(e.target.value)} />
            <button type='submit' onClick={handleSubmit}>submit</button>
        </form>
    </div>
  )
}

export default LoginForm

//login form class comp

// import React, { Component } from 'react'

// class LoginForm extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             username: '',
//             Email: '',
//             Password: '',
//             topic :'vue'
//         }
//     }

//     handleUser = (event) => {
//         this.setState({
//             username: event.target.value
//         })
//     }
//     handleEmail = (event) => {
//         this.setState({
//             Email: event.target.value
//         })
//     }
//     handlePassword = (event) => {
//         this.setState({
//             Password: event.target.value
//         })
//     }
//     handleTopic = (event) => {
//         this.setState({
//             topic : event.target.value
//         })
//     }
//     handleSubmit = (event) => {
//         alert(`username: ${this.state.username} Email: ${this.state.Email} Password: ${this.state.Password} topic: ${this.state.topic}`)
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <label>Username</label>
//                         <input type="text" value={this.state.username} onChange={this.handleUser}></input>
//                     </div>

//                     <div>
//                         <label>Email</label>
//                         <input type="email" value={this.state.Email} onChange={this.handleEmail}></input>
//                     </div>

//                     <div>
//                         <label>Password</label>
//                         <input type="password" value={this.state.Password} onChange={this.handlePassword}></input>
//                     </div>

//                     <div>
//                         <label>topic</label>
//                         <select value={this.state.topic} onChange={this.handleTopic}>
//                             <option value='react'>React</option>
//                             <option value='angular'>Angular</option>
//                             <option value='vue'>Vue</option>
//                         </select>
//                     </div>

//                     <div>
//                         <button type='submit'>Submit</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

// export default LoginForm