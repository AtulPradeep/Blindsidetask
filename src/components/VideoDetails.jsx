import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
const VideoDetails = ({ video , currentUser}) => {
  
  const[comment,setComment] = useState("");
  const[display,setDisplay] = useState([]);
  const[commentView,setCommentView] = useState(false);


  const clickHandler= ()=>{
    setCommentView(!commentView);
  }
  if (!video) {
    return <div className ="fa fa-spinner">  Loading...</div>;
  }
  //Appedning exact video id from the response
const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

const handleSubmit =(e)=>{
e.preventDefault();
// Adding individual comments with their username
const arr = [...display,`${currentUser} : ${comment}`]
setDisplay(arr);

}
const handle =(e)=>{
  e.preventDefault();
  setComment(e.target.value);
  
  }
return (
    <>
      <div>
        <iframe
          src={videoSrc}
          title="video Player"
          className="w-100"
          style={{ height: "380px" }}
        ></iframe>
      </div>
      <div className="border p-2">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        
         <form onSubmit= {handleSubmit}>
         <p onClick = {clickHandler}className="font-weight-bold">Comments</p>
        <div className="input-group">
       
        
       {
       commentView 
       ?<div>
         <input type="text" className="form-control" 
         placeholder="Type your comment" aria-label="  Type your comment" 
         aria-describedby="input-group-right" value ={comment} onChange ={handle} ></input>
         <div>

           
        { display.map((item,index)=>{
           return <p key={index}>{item}</p>
         })
         
       }
         </div>
       </div>
       :<></>
        }
       </div>
       
       </form>
        </div>
         
      
    </>
  );
};

export default VideoDetails;
