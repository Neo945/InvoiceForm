import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page from "./Page";

function Print(event) {
    // console.log('wer')
    event.target.style.display = "none";
    window.print();
    event.target.style.display = "";
}
function App() {
  return (
    <Router>
    <div className="app" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Switch>
        {[1,2,3,4].map((ele)=>{
          console.log(ele);
          return (<Route key={ele} path={`/${ele}`}>
                    <Page id={ele}/>
                  </Route>
                )
        })}
      </Switch>
      <button onClick={Print} style={{width:"100px",height:"50px",fontSize:"1.5em",padding:"5px",background:"blue",border:0,color:"white",borderRadius:"5px",margin:"100px"}}>
        Print
      </button>
    </div>
  </Router>
  );
}

export default App;
