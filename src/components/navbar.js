import React,{Component} from 'react';
import {Navbar, NavItem} from 'react-materialize'

class NavbarLayout extends Component{
    render(){
        return(
            <Navbar brand='Currency List' right>
                <NavItem href='get-started.html'>Render Data List</NavItem>
                <NavItem href='components.html'>Components</NavItem>
            </Navbar>
            )
        }
}
export default NavbarLayout;