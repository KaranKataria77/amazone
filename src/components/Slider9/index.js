import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard2 from '../ProductCard2/index'; 

const data =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_NB_1X._SY116_CB448757679_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_Diapers_1X._SY116_CB448757679_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_Premium_1X._SY116_CB448757679_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_AllBaby_1X._SY116_CB448757679_.jpg"}
]

const data2 =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Popular_Category/1.1._SY116_CB656506273_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Popular_Category/2.2._SY116_CB656506273_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Popular_Category/3.3._SY116_CB656506273_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Popular_Category/4.4._SY116_CB656506273_.jpg"}
]

const data3 =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/QC/03_186X116._SY116_CB655199627_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/QC/04_186X116._SY116_CB655199627_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/QC/02_186X116._SY116_CB655199627_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/QC/01_186X116._SY116_CB655199627_.jpg"}
]

export default class Slider9 extends Component {
    render(){
        return(
            <div style={{backgroundColor:'#EAEDED'}}>
                <Container fluid style={{ backgroundColor:'#EAEDED', width:1500 }}>
                <Row>
                <ProductCard2 title={"Get ready to beat the heat almost 25% off"} image={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Zeitgeist/Summerstore/GW/Summer-PC-CC2-1Xb._SY304_CB656866347_.jpg"} noOfImage={1} left={15} />
                <ProductCard2 title={"Handpicked products for your baby"} images={data} noOfImage={4} left={385}/>
                <ProductCard2 title={"Popular categories in fashion for you"} images={data2} noOfImage={4} left={755}/>
                <ProductCard2 title={"Launching Spring Summer'21 Tommarrow"} images={data3} noOfImage={4} left={1125}/>
                </Row>
            </Container>
            </div>
        )
    }
}