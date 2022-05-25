import React from "react";
import {Route} from "react-router-dom"
//컴포넌트
import WeekCircle from "./WeekCircle";
import DayCircle from "./DayCircle";
import {db} from "./firebase";


function App() {

  React.useEffect(() => {
      console.log(db);
  }, []);

  return (
    <div className="App">
        <Route path="/" exact>
          <WeekCircle />
          
        </Route>
        <Route path="/detail/:week_day" component={DayCircle} exact /> 

    </div>
  );
}






export default App; 