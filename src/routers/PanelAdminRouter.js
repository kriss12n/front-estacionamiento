import React from 'react'
import {Route,Switch} from "react-router-dom";
import Sidebar from "../components/ui/Dashboard";
import { ParkingScreen } from '../components/parking/ParkingScreen';
// import { DragComponent } from '../components/drag&drop/DragComponent';
import {Building} from '../components/Building/Building';



export const PanelAdminRouter = () => {
    return (
       
            <Switch>
                <Sidebar>
                    <Route exact path="/" component={ParkingScreen}  />
                    <Route exact path="/parking"  component={Building}  />
                    <Route exact path="/workers"  component={Building}  />
                    <Route exact path="/reports"  component={Building}  />
                    <Route exact path="/settings" component={Building}  />
                </Sidebar>
            </Switch>
      
    );
}
