import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import ShowArticle from './components/ShowArticle'
import registerServiceWorker from './registerServiceWorker';

const Root = ()=>{
  return(
    <Router>
          <Switch>
            <Route exact path='/' component={App}/>
            {/* <Route exact path='/add' component={AddCours}/> */}
            <Route exact path='/article' component={ShowArticle}/>
          </Switch>
    </Router>
  )
}

ReactDOM.render(<Root/>,document.getElementById('root'));
registerServiceWorker();
