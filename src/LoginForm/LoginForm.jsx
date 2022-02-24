import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

const LoginForm = (props) => {

    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

    }

    return ( 

        <form className="form-grid">
            <h3>Create User</h3>
                <div className="form-control">
                    <label>Username</label>
                    <input type='text' className='form-control'/>
                    <label>Password</label>
                    <input type='text' className='form-control'/>
                </div>
            <button variant='primary'>Create User</button>
        </form>

    );
}
 
export default LoginForm;props