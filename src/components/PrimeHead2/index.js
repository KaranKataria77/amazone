import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PrimeHead2 extends Component {
    render() {
        return (
            <>
            <div style={{position:'absolute', zIndex:1,color:'#fff', right:0, backgroundImage:"linear-gradient(to left, #0F1111 40%, rgba(255,0,0,0) 60%)", height:550, width:1500 }} >
                <h1 style={{position:'absolute', zIndex:1, right:80, top:150}}>Great Entertainment</h1>
                <p style={{position:'absolute', zIndex:1, right:80, top:210,fontSize:20}}>With your Prime membership, you have access to exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more.</p>
                <Button style={{position:'absolute', zIndex:1, right:80, top:270, backgroundColor:'#0f79af', borderRadius:0, height:50, width:250}}>Get Started</Button>
            </div>
            <Image style={{width:1518, height:550}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/1500X600._CB668498028_.png" fluid />
            </>
        )
    }
}
