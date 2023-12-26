import React from "react";
import './facerecognition.css'

const FaceRecognition = ({imageUrl, boundingBox}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
                <div className='bounding-box' style={{top: boundingBox.topRow, right: boundingBox.rightCol, bottom: boundingBox.bottomRow, left: boundingBox.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition