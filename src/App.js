import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Page from "./Page";
function App() {
  return (
    <Router>
    <div>
      <Switch>
        {[1,2,3,4].map((ele)=>{
          console.log(ele);
          return (<Route key={ele} path={`/${ele}`}>
                    <Page id={ele}/>
                  </Route>
                )
        })}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
