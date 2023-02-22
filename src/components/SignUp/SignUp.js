import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error, setError]= useState('null');
    const {createUser}=useContext(AuthContext)

    const handleSubmit=(event)=>{
        // error state:        
        // auto reload stop method: 
        event.preventDefault();

        // get the value from the fields
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        console.log(email, password, confirm);

        // validation
        if(password.length < 6){
            setError('Password should be at least 6 characters or more');
            return;
        }
 
       else if(password !== confirm){
            setError('Your Password  did not match');
            return;
        }

        createUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            
        })
        .catch(error=>console.error(error));



    }
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='password' required/>
                </div>

                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have an Account? <Link to="/login">Login</Link> </p>
            {/* show error  */}
            <p className='text-error'>{error}</p>
            
        </div>
            
        </div>
    );
};

export default SignUp;