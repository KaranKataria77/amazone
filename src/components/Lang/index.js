import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default class Lang extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#EAEDED', paddingTop:20, paddingBottom:20}}>
                <Container style={{width:1500}} fluid>
                    <Image src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg" fluid />
                </Container>
            </div>
        )
    }
}
