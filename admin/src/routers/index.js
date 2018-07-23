
import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import config from "./config";
class RotersList extends Component {
    render() {
        const { token } = this.props.saveToken
        return (
            <Route render={({ location }) => (
                <Switch location={location}>
                    {Object.keys(config).map(key => {
                        return config[key].map(item => {
                            const routeItem = (item, i) => {
                                return token ? <Route exact key={i} component={item.component} path={item.key} /> : <Redirect to="/login" />
                            }
                            return item.component ? routeItem(item) : item.subs.map(item => routeItem(item));
                        })
                    })
                    }
                </Switch>
            )} />
        )
    }



}

export default connect(state => ({
    saveToken: state.saveToken
}))(RotersList)