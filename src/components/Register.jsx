import React, {useState} from 'react'


export const Register = (props) => {
    
    /* State's for data input */
    const [Fname, setFName] = useState('');
    const [Lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [id, setID] = useState('');

    const [street_number, setStreet] = useState('');
    const [street_name, setApt] = useState('');
    const [City, setCity] = useState('');
    const [State, setState] = useState('');
    const [Zip, setZip] = useState('');

    const [creditCard, setCardBalance] = useState('');

    




    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh
        console.log(email); // print email and pass to console
    }


    return (
        <div class = "auth-form-container">
            <h2 class = "register-title">Register</h2>
        <form className = "register-form" onSubmit={handleSubmit}>
            
            <label htmlFor = "Fname">First Name</label>
            <input value = {Fname} onChange = {(e) => setFName(e.target.value)} type= "Fname" placeholder= "First Name" id="Fname"/>


            <label htmlFor = "Lname">Last Name</label>
            <input value = {Lname} onChange = {(e) => setLName(e.target.value)} type= "Lname" placeholder= "Last Name" id="Lname"/>

            <label htmlFor= "email">Email</label>
            <input value = {email} onChange = {(e) => setEmail(e.target.value)} type= "email" placeholder= "Email" id="email" Fname="email" />

            <label htmlFor= "password">Password</label>
            <input value = {pass} onChange = {(e) => setPass(e.target.value)} type= "password" placeholder= "Password" id="password" Fname="password" />

            <label htmlFor= "id">Captial One ID</label>
            <input value = {id} onChange = {(e) => setID(e.target.value)} type= "id" placeholder= "Captial One ID" id="id" Fname="id" />



            <div class = "omars-special-sauce">
            <h3 class = "address-title">Address</h3>
            <h6 class = "capitalone-use">Capital One Account Creation</h6>
            </div>
        
            <label htmlFor = "street_number"> Street-Number</label>
            <input value = {street_number} onChange = {(e) => setStreet(e.target.value)} type= "street_number" placeholder= "Street-Number" id="street_number"/>

            <label htmlFor= "street_name"> Street-Name</label>
            <input value = {street_name} onChange = {(e) => setApt(e.target.value)} type= "street_name" placeholder= "Street-Name " id="street_name" Fname="street_name" />

            <label htmlFor= "City"> City</label>
            <input value = {City} onChange = {(e) => setCity(e.target.value)} type= "City" placeholder= "City " id="City" Fname="City" />

            <label htmlFor= "State"> State</label>
            <input value = {State} onChange = {(e) => setState(e.target.value)} type= "State" placeholder= "State " id="State" Fname="State" />

            <label htmlFor= "Zip"> Zip</label>
            <input value = {Zip} onChange = {(e) => setZip(e.target.value)} type= "Zip" placeholder= "Zip " id="Zip" Fname="Zip" />

            
            <h3 class = "address-title">Statment</h3>
            

            <label htmlFor= "creditCard"> Remaining Credit Balance</label>
            <input value = {creditCard} onChange = {(e) => setCardBalance(e.target.value)} type= "creditCard" placeholder= "Credit Card Balance " id="creditCard" Fname="creditCard" />














            
            
            
            <button className='submit-button' type = "submit"> Log In </button>
        </form>
        <button className = "link-btn" onClick = {() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>

    )
}