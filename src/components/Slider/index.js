import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard2 from '../ProductCard2/index'; 

const data =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/1._SY116_CB656503003_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/2._SY116_CB656503003_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/3._SY116_CB656503003_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/4._SY116_CB656503003_.jpg"}
]

const data2 =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GWGraphics/Desktop-Qc-1-1x._SY116_CB669420330_.png"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GWGraphics/Desktop-Qc-2-1x._SY116_CB669420330_.png"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GWGraphics/Desktop-Qc-3-1x._SY116_CB669420330_.png"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GWGraphics/Desktop-Qc-4-1x._SY116_CB669420330_.png"}
]

const data3 =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_1._SY116_CB431329533_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_3._SY116_CB431329535_.jpg"}
]

export default class Slider extends Component {
    render(){
        return(
            <Container fluid style={{ backgroundColor:'#EAEDED', width:1500 }}>
                <Row> 
                <ProductCard2 title={"Styles for Men | Up to 70% off for mens"} images={data} noOfImage={4} left={15} />
                <ProductCard2 title={"Pay your credit card bills on Amazon"} images={data2} noOfImage={4} left={385}/>
                <ProductCard2 title={'Everyday essentials for household works'} image={"https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"}left={755}/>
                <ProductCard2 title={"Book tickets for essential travel"} images={data3} noOfImage={4} left={1125}/>
                </Row>
            </Container>
        )
    }
}