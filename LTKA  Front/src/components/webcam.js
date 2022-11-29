import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';
import "./index2.css"

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width : 200,
    height : 200,
    facingMode: 'user'
  };
  const[name, setName] = useState('')
  const capture = React.useCallback(
  () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`)
                //for deployment, you should put your backend url / api
    axios.post('http://127.0.0.1:5000/api', {data : imageSrc})
    	  .then(res => {
      	  console.log(`response = ${res.data}`)
      	  setName(res.data)
    })
    	  .catch(error => {
      	  console.log(`error = ${error}`)
    })
  }, 
   [webcamRef]
  );
  
  return (
  <div className='webcam'>
    <Webcam
     audio = {false}
	 height = {500}
	 ref = {webcamRef}
	 screenshotFormat = "image/jpeg"
	 width = {500}
	 videoConstraints = {videoConstraints}
	/>
    <button onClick={capture} className='button'>Click Me!</button>
	<h2>{name}</h2>
  </div>
	);
  
};

export default WebcamCapture;
