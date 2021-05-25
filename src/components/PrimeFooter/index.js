import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PrimeFooter extends Component {
    render() {
        return (
            <div style={{backgroundColor:'black', height:100, width:1518, color:'#fff'}}>
                <Container style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Image style={{marginTop:10}} src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" fluid />
                <p style={{fontSize:20, marginTop:10}}>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                </Container>
            </div>
        )
    }
}
