import React, {Component} from 'react';
import Webcam from 'react-webcam';
import WebcamCapture from './components/webcam.js';
import './index.css';

class App extends Component {

  render() {

    return (
      <body className='back'>
          <div className='head'>
            <h2 >Face Recognition!!!</h2>
          </div>
          <div className='webcam'>
            <WebcamCapture/>
          </div>
          

      </body>
      )
  }
}



export default App;