import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux"
import store from "./store"
import { AppContainer } from 'react-hot-loader';
import RouterPage from "./routers/RouterPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer>
          <Provider store={store}>
            <section>
              <RouterPage store={store} />
            </section>
          </Provider>
        </AppContainer>
      </div>
    );
  }
}

export default App;
