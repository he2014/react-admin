import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Login from "../components/pages/login/login"
import Container from "../components/pages/container/Container"
import NotFound from "../components/pages/404/NoFound"

class RouterPage extends Component {
    render() {
        const { token } = this.props.saveToken;
        const isToken = token || sessionStorage.getItem("token");
        return <Router>
            <Switch>
                <Route exact path="/" render={() => isToken ? <Redirect to="/admin/home" /> : <Redirect to="/login" />} />
                <Route exact path="/login" component={Login} />
                <Route path="/admin" component={Container} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    }
}
export default connect(state => ({
    saveToken: state.saveToken
}))(RouterPage)