import React, {Component} from 'react'
import phone from './components/phone.js';
import './App.css'

class App extends Component {
  render () {
    return (
        <div>
          <h1>List of available mobiles:</h1> 
          <div class='mobiles'>
            <div class='mobile1'>
            Samsung s10
            </div>
            <div class='mobile2'>
            Iphone 12 
            </div>
            <div class='mobile3'>
            Iphone 12 
            </div>
            <div class='mobile4'>
            Samsung s3 
            </div>
            <div class='mobile5'>
            Iphone 10 
            </div>
            <div class='mobile6'>
            Huawei mate 
            </div>
            <div class='mobile7'>
            Samsung s10
            </div>
            <div class='mobile8'>
            Iphone 13
            </div>
            <div class='mobile9'>
            Samsung s note
            </div>

          </div>
        </div>
    );
  }
}

export default App;
