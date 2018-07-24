/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../components/AllComponent';
import routesConfig from './config';

export default class CRouter extends Component {

    render() {
        const { token } = this.props;
        const isToken = token || sessionStorage.getItem("token")
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key =>
                        routesConfig[key].map(r => {
                            const route = r => {
                                const Component = AllComponents[r.component];
                                return (
                                    <Route
                                        key={r.key}
                                        exact
                                        path={r.key}
                                        component={props => {
                                            return isToken ? <Component {...props} /> : <Redirect to={'/login'} />
                                        }

                                        }
                                    />
                                )
                            }
                            return r.component ? route(r) : r.subs.map(r => route(r));
                        })
                    )
                }
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}