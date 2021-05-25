import React, { Component } from 'react';
import './style.css';
import MenuIcon from '@material-ui/icons/Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = ["Best Seller", "Mobiles", "Prime", "Fashion", "New Releases", "Electronics", "Customer services", "Today's deals", 'Amazon Pay', "Home & Kitchen", "Computers"]

export class Header extends Component {
    render() {
        return (
            <Container className="headerBlock" fluid>
                <Row>
                        <MenuIcon style={{color:"#fff", marginTop:7, marginLeft:20}} />
                        <p className="headerPoint">All</p>
                        {
                            data.map((head, key) => (
                                <p style={{color:"#fff", marginTop:7, marginLeft:17, fontSize:15}} key={key}>{head}</p>
                            ))
                        }
                        <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/June/gaming-swm._CB430661085_.jpg" style={{marginLeft:20}} fluid />
                </Row>
            </Container>
        )
    }
}

export default Header;
