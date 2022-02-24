import React, { useEffect, useState } from 'react';

const RegistrationForm = (props) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            lastName: lastName,
            userName: userName,
            password: password,
        }
        console.log(newEntry);
        
    }

    return ( 
        <form onSubmit={handleSubmit} className="form-grid">
            <h3>Create User</h3>
                <div className="form-control">
                    <label>First Name</label>
                    <input type='text' className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
                    <label>Last Name</label>
                    <input type='text' className='form-control' value={lastName} onChange={(event) => setLastName(event.target.value)}/>
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