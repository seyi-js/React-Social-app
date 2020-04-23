import React  from 'react';

import { Switch, Route } from 'react-router-dom';
import './App.css'
import store from './store';
import { Provider } from 'react-redux';
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'









export const App = () => {

        
    
  
    
        return (
                <Provider store={store}>
                <Switch>
                    <React.Fragment>
                   <Route path="/" exact component={Join} />
                   <Route path="/chat" exact component={Chat} />
                    




                    
                    
                </React.Fragment>
                </Switch>
                </Provider>
                
        )
    
}

export default App
