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
    axios.post('http://35.226.236.112:5000/api', {data : imageSrc})
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
    <Webcam className='web'
     audio = {false}
	 height = {500}
	 ref = {webcamRef}
	 screenshotFormat = "image/jpeg"
	 width = {500}
	 videoConstraints = {videoConstraints}
	/>
    <button onClick={capture} className='button'>Click Me!</button>
    <h1 > Ini adalah : {name}  </h1>

  </div>
	);
  
};

export default WebcamCapture;
