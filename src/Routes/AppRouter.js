import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import CreateExpenses from "../components/CreateExpenses";
import DashBoardExpenses from "../components/DashBoardExpenses";
import EditExpenses from "../components/EditExpenses";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter=()=>(
    <div>
        <BrowserRouter>
           <div>
                <Header/>
                <Switch> 
                    <Route path="/" component={DashBoardExpenses} exact={true}/>
                    <Route path="/create" component={CreateExpenses}/>
                    {/* <Route path="/edit" component={EditExpenses}/> */}
                    <Route path="/edit/:id" component={EditExpenses}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    </div>
)

export default AppRouter;