import React from "react";
import {Nav, NavItem, NavLink, NavbarBrand, Navbar} from "reactstrap"
import Carro from "./Carro";

class Navegacion extends React.Component {
    render(){
        return(
            <Navbar color="light" light expand="sm">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto0" navbar>
                    <NavItem>
                        <NavLink href="/">Nosotros</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Productos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">Contacto</NavLink>
                    </NavItem>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        ); 
    }
}
export default Navegacion;