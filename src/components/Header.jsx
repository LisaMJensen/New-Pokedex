import React from 'react';
import {
    Navbar, NavbarBrand, Nav, NavLink,
    Button
} from 'reactstrap';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }



    render() {

        return (
            <div>
                <Navbar color="danger" dark expand="md">
                    {/* <NavbarBrand href="/"><h3 className="headerName"><img className="headerLogo" src={} alt="placeholder logo" /> */}
                       <h3>Pokedex</h3>
                       {/* </NavbarBrand> */}
                </Navbar>

            </div>
        );
    }
}

export default Header;