import React ,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import './Contact.css';

class App extends Component {
  render() {
    return (
      <Register />
    );
  }
  
}

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validname=RegExp(/[^a-z A-Z_]/i);
const validcontact=RegExp(/[^0-9]/i); 
const validmessage=RegExp(/[^a-z A-Z0-9@_]/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      institute: null,
      contact: null,
      message: null,
      errors: {
        fullName: '',
        email: '',
        contact: '',
        institute: '',
        message: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName': 
        errors.fullName = 
          value.length < 3 || validname.test(value)
            ? 'Please Input a valid name of Minimun 3 characters'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'institute': 
        errors.institute = 
          value.length < 3 || validname.test(value)
            ? 'Please Input a valid institute of Minimun 3 characters'
            : '';
        break;
        case 'contact': 
        errors.contact = 
          value.length <10 || value.length>12 || validcontact.test(value)
            ? 'Please input a valid contact number'
            : '';
        break;
        case 'message': 
        errors.message = 
          value.length < 10 || validmessage.test(value)
            ? 'Message must be 10 Characters long'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      <div className='at'>
        <div className='aw'>
          <h1><center>Contact Us</center></h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className='fnn'>
              <label htmlFor="fnn">Full Name</label>
              <input type='text' id="fullname" name='fullName' onChange={this.handleChange} noValidate />
              {errors.fullName.length > 0 && 
                <span className='pop'>{errors.fullName}</span>}
            </div>
            <div className='em'>
              <label htmlFor="em">Email</label>
              <input type='email' name='email' id ='email' onChange={this.handleChange} noValidate />
              {errors.email.length > 0 && 
                <span className='pop'>{errors.email}</span>}
            </div>
            <div className='fnn'>
              <label htmlFor="fnn">Institute</label>
              <input type='text' name='institute' id='institute' onChange={this.handleChange} noValidate />
              {errors.institute.length > 0 && 
                <span className='pop'>{errors.institute}</span>}
            </div>
            <div className='fnn'>
              <label htmlFor="fullName">Contact</label>
              <input type='text' name='contact' id='contact' onChange={this.handleChange} noValidate />
              {errors.contact.length > 0 && 
                <span className='pop'>{errors.contact}</span>}
            </div>
            <div className='fnn'>
              <label htmlFor="fnn">Message</label>
              <textarea   name='message' id='message' onChange={this.handleChange} noValidate>
              
              </textarea>
              {errors.message.length > 0 && 
                <span className='pop'>{errors.message}</span>}

            </div>

            <div className='jan'>
              <small>Your Message is valueable to us.</small>
            </div>
           
            <div className='gya'>
             <button className='but' onClick={this.handleSubmit} >Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
export default App;