import React, { Component } from 'react';
import './style.css';
import logo from '../../assets/logo5.png';
import flag from '../../assets/flag.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Image from 'react-bootstrap/Image';
import RoomIcon from '@material-ui/icons/Room';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import FlagIcon from '@material-ui/icons/Flag';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Navbar extends Component {
    render() {
        return (
            <Container className="header" fluid>
                <Row>
                    <Image src={logo} className="headerImage" fluid />
                    <div className="address" >
                        <RoomIcon style={{ color: "white", fontSize: 20, marginTop: 20 }} />
                        <span>
                            <p>Hello</p>
                            <h4>Select Your Address</h4>
                        </span>
                    </div>
                    <div className="input">
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown-basic" id="dropdown-basic">
                                All
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input type="text" />
                        <Link to={{pathname:'/page'}} >
                        <SearchIcon style={{ color: "black", fontSize: 35, alignSelf: 'center', marginLeft: 8, marginTop:5 }} />
                        </Link>
                    </div>
                    <Image style={{height:25, width:40, marginTop:15, marginLeft:15}} src={flag} fluid />
                    <div className="address" >
                        <span>
                            <p>Hello, Sign in</p>
                            <h4>Address and List</h4>
                        </span>
                    </div>
                    <div className="address" >
                        <span>
                            <p>Returns</p>
                            <h4>& Orders</h4>
                        </span>
                    </div>
                    <div className="address">
                        <ShoppingCartIcon style={{color:'white', fontSize:40, marginTop:10}} />
                        <p style={{color:'white', fontSize:17, marginTop:35, fontWeight:'bold'}}>Cart</p>
                    </div>
                </Row>
            </Container>
        )
    }
}

export default Navbar
