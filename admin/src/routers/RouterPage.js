import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';
// import Login from "../components/pages/login/login"
// import Container from "../components/pages/container/Container"
//import NotFound from "../components/pages/404/NoFound"
const Login = Loadable({
    loader: () => import("../components/pages/login/login"),
    loading: Loading
});
const Container = Loadable({
    loader: () => import("../components/pages/container/Container"),
    loading: Loading
});
const NotFound = Loadable({
    loader: () => import("../components/pages/404/NoFound"),
    loading: Loading

});
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