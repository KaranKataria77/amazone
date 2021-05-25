import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './productCard.css'

export default class ProductCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="productCard" style={{left:this.props.left, backgroundColor:"#fff", zIndex:1, width:350,top:30, bottom:0, position:"absolute"}} fluid>
                <div className="card">
                <h4>{this.props.title}</h4>
                {
                    this.props.noOfImage == 4 ?
                    <>
                    <div>
                <Image className="productImg" src={this.props.data[0].img} fluid/>
                <Image className="productImage" src={this.props.data[1].img} fluid/>
                </div>
                <div className="productImageHeader">
                <Image className="productImg" src={this.props.data[2].img} fluid/>
                <Image className="productImage" src={this.props.data[3].img} fluid/>
                </div>
                </> 
                :
                <div>
                    <Image className="product" src={this.props.img} fluid/>
                </div>
                }
                <Link to={{pathname:"/page"}}>
                <p style={{marginTop:10}}>See more</p>
                </Link>
                </div>
            </div>
        )
    }
}
