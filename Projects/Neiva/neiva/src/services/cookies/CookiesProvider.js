/* eslint-disable react/prop-types */
import React, { Component } from "react";
import Context from "./Context";
import ClientManager from "./ClientManager";

export default class CookiesProvider extends Component {
  static defaultProps = {
    manager: new ClientManager(),
  };

  render() {
    const { manager, children } = this.props;

    return <Context.Provider value={manager}>{children}</Context.Provider>;
  }
}
