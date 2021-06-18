import React ,{Component} from 'react';
import "./Thank.css";

class App extends Component {
  render() {
    return (
         <div id='card' class="animated fadeIn">
  <div id='upper-side'>
   <i class="fa fa-check"></i>
   
</div>
  <div id='lower-side'>
    <p id='message'>
      Thank you for Contacting us.
    </p>
    <a href="/home" id="contBtn">Back to home</a>
  </div>
</div>

    );
  }
} 
export default App;