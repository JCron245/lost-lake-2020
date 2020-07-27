import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../../assets/logo_small.png";
import { routes } from "../routes";

function Header() {
	return (
		<div className="header-nav">
			<Navbar bg="light" expand="lg" variant="light" collapseOnSelect>
				<img src={Logo} className="app-logo" alt="Lost Lake Resort Logo" />
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{routes.map(
							({ path, name, showInNav }, index: any) =>
								showInNav && (
									<Nav.Link
										key={path + "-header"}
										eventKey={index}
										as={NavLink}
										activeClassName="active"
										to={path}
										exact
									>
										{name}
									</Nav.Link>
								)
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
