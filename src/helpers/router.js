import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Router } from 'react-router';

export const history = createBrowserHistory();

export default class BrowserRouter extends Component {
  render() {
    return <Router history={history} children={this.props.children} />
  }
}
