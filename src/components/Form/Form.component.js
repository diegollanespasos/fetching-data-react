import { useState } from 'react';
import './Form.styles.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = ({ handlePostUser }) => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        job: '',
    })

    const handleChangeField = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            job: formState.job
        };

        handlePostUser(newUser);
    }

    return(
        <div className='form-container'>
            <h2>Post User</h2>
            <form className='form-container'>
                <TextField id='firstName' label='First Name' value={formState.firstName} onChange={handleChangeField} margin='dense'/>
                <TextField id='lastName' label='Last Name' value={formState.lastName} onChange={handleChangeField} margin='dense'/>
                <TextField id='email' label='Email'  value={formState.email} onChange={handleChangeField} margin='dense'/>
                <TextField id='job' label='Job' value={formState.job} onChange={handleChangeField} margin='dense'/>
                <br />
                <Button color="primary" variant="contained" onClick={handleSubmit}>
                    Post User
                </Button>
            </form>
        </div>

    )
}

export default Form;