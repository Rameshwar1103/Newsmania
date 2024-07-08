
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
BrowserRouter as Router,
Routes,Route
} from 'react-router-dom'
import {useState} from 'react';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const apikey = process.env.REACT_APP_NEWS_API
  console.log(apikey);
  const [modeText,setModeText] = useState("Enable dark mode");
  const [style,setStyle] = useState({
    backgroundColor : "#FFFFFF",
    color : "black"
  });
  
  const [progress,setprogress] = useState(10);
  const setProgress=(progress)=>{
    setprogress(progress);
  };
  const switchMode = ()=>{
    if(modeText ==="Enable dark mode")
      {
        setStyle({
          backgroundColor : "black",
          color : "white"
        });
        setModeText("Enable light mode");

      }
    else{
      setStyle({
        backgroundColor : "#FFFFFF",
        color : "black"
      });
      setModeText("Enable dark mode");
    }
  }
  

  return (
    <div style={style}>
      <Router>
      <Navbar style={style} modeText={modeText} switchMode={switchMode} />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
      <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey}  key="home"pageSize={5} category="general" style={style} />} />
      <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey}  key="business"pageSize={5} category="business" style={style}  />} />
      <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey}  key="entertainment"pageSize={5} category="entertainment" style={style} />} />
      <Route exact path='/general' element={<News setProgress={setProgress} apikey={apikey}  key="general"pageSize={5} category="general" style={style}  />} />
      <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey}  key="health"pageSize={5} category="health" style={style}     />} />
      <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey}  key="science"pageSize={5} category="science" style={style}  />} />
      <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey}  key="sports"pageSize={5} category="sports" style={style}    />} />
      <Route exact path='/technology' element={<News setProgress={setProgress} apikey={apikey}  key="technology"pageSize={5} category="technology" style={style}  />} />
      </Routes>
       
     
      </Router>
      </div>
  );
}

export default App;
