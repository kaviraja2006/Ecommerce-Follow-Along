// import React, {useState} from 'react';
// import './Login.css';
// const login=()=>{
//     const [username, setUsername]=useState('');
//     const [password, setPassword]=useState('');
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         console.log('Username:',username);
//         console.log('Password:',password);
//         setUsername('')
//         setPassword('')
//     };
//     return(
//         <div className='login-container'>
//             <h2>welcome Back!</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='input-group'>
//                     <label>Username</label>
//                     <input type="text"
//                      value={username} 
//                      onChange={(e)=>setUsername(e.target.value)}
//                      placeholder='Enter your username'
//                      required/>
//                 </div>
//                 <button type='submit'>Login</button>
//             </form>
//         </div>
//     )
// }    

