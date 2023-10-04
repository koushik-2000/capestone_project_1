import React,{useState, useEffect} from 'react';
import './Signup.css';

function Signup() {
  let initialValues = {
    name:"",
    userName:"",
    email:"",
    mobile:"",
    checkBox:""
  }
  let [formValue, setFormValue] = useState(initialValues);
  let [formErrors, setFormErrors] = useState(formValue);
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormValue({...formValue, [name]: value});
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    setFormErrors(validate(formValue));
  }
  const validate = (values)=>{
    const errors = {};
    var mailFormat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    var mobFormat = /^\d{10}$/;
    if((values.name.length<4)){
      errors.name = "no shorter than 4 chars"
      if(!values.name){
        errors.name = "name is required";
      }
    }
    if((values.userName.length<4)){
      errors.userName = "no shorter than 4 chars"
      if(!values.userName){
        errors.userName = "userName is required";
      }
    }
    if(!values.email.match(mailFormat)){
      errors.email = "email format wrong";
    }
    if(!values.email){
      errors.email = "email is required";
    }
    if(!values.mobile){
      errors.mobile = "mobile is required";
    }
    if(!values.mobile.match(mobFormat)){
      errors.mobile = "must be 10 digits";
    }
    if(!values.checkBox){
      errors.checkBox = "please agree to sign up";
    }
    return errors;
  }
  useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0){
      console.log("success");
      localStorage.setItem("realName", formValue.name);
      localStorage.setItem("userName", formValue.userName);
      localStorage.setItem("email", formValue.email);
      localStorage.setItem("mobile", formValue.mobile);
    }
  }, [formErrors])
  function handleCheck(e){
    const {name, checked} = e.target;
    setFormValue({...formValue, [name]:!!checked});
    console.log(formValue.checkBox);
  }
  return (
    <div className="signUp">
      <div className="left">
        <h2 className="leftQuote">Discover new things on <br /> Super app</h2>
      </div>
      <form className="right" onSubmit={handleSubmit}>
        <h3 className="logo">super app</h3>
        <p className="acCreate">Create your new account</p>
          <input type="text" className="inputField" onChange={handleChange} name="name" placeholder="Name"/>
          <p className="error">{formErrors.name}</p>
          <input type="text" className="inputField" onChange={handleChange} name="userName" placeholder="UserName"/>
          <p className="error">{formErrors.userName}</p>
          <input type="text" className="inputField" onChange={handleChange} name="email" placeholder="Email"/>
          <p className="error">{formErrors.email}</p>
          <input type="text " className="inputField" onChange={handleChange} name="mobile" placeholder="Mobile"/>
          <p className="error">{formErrors.mobile}</p><br />
          <p className="checkQuote"><input type="checkbox" name="checkBox" className="checkBox" onChange={(e)=>{handleChange(e);handleCheck(e)}}/> Share my registration data with Superapp</p>
          <p className="error topMargin">{formErrors.checkBox}</p>
          <button className="signup" onClick={handleSubmit}>sign up</button>
        <p className="tc">By clicking on Sign up. you agree to Superapp <span className="tcg">Terms and <br />
          Conditions of Use</span></p>
        <p className="tc">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="tcg">Privacy <br />Policy</span></p>
      </form>
    </div>
  );
}

export default Signup;
