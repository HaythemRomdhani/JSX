
import './App.css';
import './style.css';
import myWonderfulImage from "./imageInSrc.jpg"
import video from "./video.mp4";
function App() {
  return (
    <>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className='title red'>Your name here</h1>
      <br ></br>
      <img src={myWonderfulImage} alt ='myImage' style={{ height:300}}/>
      <br ></br>
      <img src="/imageInPublic.jpg"  alt="myimage" style={{ height:282}}/>
    </div>
    <video controls  src={video} type="video/mp4" style={{width:700, height:240}}></video>
    </>
  );
}

export default App;
