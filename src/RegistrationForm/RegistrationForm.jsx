import React, { useState } from 'react';
import axios from "axios";

const RegistrationForm = (props) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            "username": userName,
            "password": password,
            "email": email,
            "first_name": name,
            "last_name": lastName,
        }
        createUser(newEntry);
        console.log(newEntry);
        
    }

    async function createUser(newEntry){
        console.log(newEntry);
        let user = await axios.post('http://127.0.0.1:8000/api/auth/register/', newEntry);
            console.log(user);
            console.log(user.data);
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <h3>Create User</h3>
                <div className="form-control">
                    <label>First Name</label>
                    <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
                    <label>Last Name</label>
                    <input type='text' className='form-control' value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                    <label>Email</label>
                    <input type='text' className='form-control' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <label>Username</label>
                    <input type='text' className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)}/>
                    <label>Password</label>
                    <input type='text' className='form-control' value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
            <button type="submit" variant='primary'>Create User</button>
        </form>

     );
}
 
export default RegistrationForm;