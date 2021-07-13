import React from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FourNotFourPage from './page/404/FourNotFourPage';
import LoginPage from './page/auth/LoginPage';
import SignUpPage from './page/auth/SignUpPage';
import UserProfilePage from './page/profile/UserProfilePage';
import StudentProfilePage from './page/profile/StudentProfilePage';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/auth/login" />
                    </Route>

                    <Route exact path="/auth/login">
                        <LoginPage />
                    </Route>

                    <Route exact path="/auth/sign-up">
                        <SignUpPage />
                    </Route>

                    <Route exact path="/profile/user">
                        <UserProfilePage />
                    </Route>

                    <Route exact path="/profile/student">
                        <StudentProfilePage />
                    </Route>

                    <Route path="*">
                        <FourNotFourPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
