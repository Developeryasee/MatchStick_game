import React from 'react'
import { Router, Scene, ActionConst } from 'react-native-router-flux'

import Login from './Component/Login/login'
import Dashboard from './Component/Dashboard/dashboard'
import Result from './Component/Result/result'

const Routes = () => {

    return(
    
            <Router>
        <Scene key="root" hideNavBar >
          <Scene key="login" component={Login} type={ActionConst.RESET} title="login" />
          <Scene key="dashboard" component={Dashboard}  title="dashboard" /> 
          <Scene key="result" component={Result}  title="result" />
          
        
    
        </Scene>
    
      </Router>

        
    );
   
}
export default Routes
