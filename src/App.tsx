import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import FourNotFourPage from './page/404/FourNotFourPage';
import LoginPage from './page/auth/LoginPage';
import SignUpPage from './page/auth/SignUpPage';
import ProfileInfoPage from './page/profile/ProfileInfoPage';
import StudentInfoPage from './page/profile/StudentInfoPage';

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

                    <Route exact path="/profile/info">
                        <ProfileInfoPage />
                    </Route>

                    <Route exact path="/student/info">
                        <StudentInfoPage />
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
