import React from 'react'
import {Route,Switch} from "react-router-dom";
import Sidebar from "../components/ui/Dashboard";
import { ParkingScreen } from '../components/parking/ParkingScreen';
import { DragComponent } from '../components/drag&drop/DragComponent';

export const PanelAdminRouter = () => {
    return (
       
            <Switch>
                <Sidebar>
                    <Route exact path="/" component={ParkingScreen}  />
                    <Route exact path="/drag&drop" component={DragComponent}  />
                </Sidebar>
            </Switch>
      
    );
}
