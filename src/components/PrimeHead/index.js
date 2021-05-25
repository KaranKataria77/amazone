import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PrimeHead extends Component {
    render() {
        return (
            <>
            <div style={{position:'absolute', zIndex:1,color:'#fff', backgroundImage:"linear-gradient(to right, #0F1111 40%, rgba(255,0,0,0) 60%)", height:550, width:1500 }} >
                <h1 style={{marginLeft:70, marginTop:150}}>Welcome to Prime Video</h1>
                <p style={{marginLeft:70, marginTop:20, fontSize:20}}>Join Prime to watch the latest Movies, TV shows and award-wining Amazon Originals</p>
                <Button style={{marginLeft:70, marginTop:20, backgroundColor:'#0f79af', borderRadius:0, height:50, width:250}}>Login to Join Prime</Button>
            </div>
            <Image style={{width:1518, height:550}} src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg" fluid />
            </>
        )
    }
}
