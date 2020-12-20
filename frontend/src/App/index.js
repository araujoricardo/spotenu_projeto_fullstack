import React from 'react';
import Router from "./Router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../redux/Reducers";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import {AppWrapper} from "./style";
import Header from "./components/Header"

export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk)
];

const store = createStore(generateReducers(history), compose(...middlewares));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppWrapper>
          <Header/>
          <Router history={history} />
        </AppWrapper>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
