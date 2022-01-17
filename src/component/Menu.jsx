import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

const Menu = ({cartItem}) => {
    return(
        <div>
          <Navbar
            color="light"
            expand="md"
            light
          >
            <NavbarBrand href="/">
              Cart &nbsp; {cartItem}
            </NavbarBrand>

            <NavbarToggler onClick={function noRefCheck(){}} />
          
          </Navbar>
      </div>
    )
}

export default Menu;