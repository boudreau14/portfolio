import React, { Component } from 'react';
import { Nav, Icon } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export default class NavBar extends Component {
    render() {
    return (
        <Nav>
    <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
    <Nav.Item>News</Nav.Item>
    <Nav.Item>Solutions</Nav.Item>
    <Nav.Item>Products</Nav.Item>
    <Nav.Item>About</Nav.Item>
  </Nav>
        )
    }
}