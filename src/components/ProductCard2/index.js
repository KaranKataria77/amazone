import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import './productCard2.css'


export default class ProductCard2 extends Component { 
    render() {
        return (
            <div className="productCard2" style={{marginLeft:20, backgroundColor:"#fff", width:350,}} fluid>
                <div className="card2">
                <h4>{this.props.title}</h4>
                {
                    this.props.noOfImage == 4 ? 
                    <>
                    <div>
                    <Image className="productImg2" src={this.props.images[0].img} fluid/>
                    <Image className="productImage2" src={this.props.images[1].img} fluid/>
                    </div>
                    <div className="productImageHeader2">
                    <Image className="productImg2" src={this.props.images[2].img} fluid/>
                    <Image className="productImage2" src={this.props.images[3].img} fluid/>
                    </div>
                    </>
                    :
                    <div>
                        <a style={{cursor:'pointer'}}>
                        <Image className="product2" src={this.props.image} fluid/>
                        </a>
                    </div>
                }
                <Link to="/page">
                <p style={{marginTop:10}}>See more</p>
                </Link>
                </div>
            </div>
        )
    }
}
