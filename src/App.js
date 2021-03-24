
import './App.css';
import './style.css';
import myWonderfulImage from "./imageInSrc.jpg"
import video from "./Nature.mp4";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className='title red'>Haythem Romdhani</h1>
      <br/>
      <img src={myWonderfulImage} alt ='myImage' style={{ height:300}}/>
      <br/>
      <img src="/imageInPublic.jpg"  alt="myimage" style={{ height:282}}/>
      <br/>
    <video src={video}  width="700" height="240" controls="true" />
    <br/>
    </div>
    </header>
    </div>
  );
}

export default App;
