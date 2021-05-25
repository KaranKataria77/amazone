import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard2 from '../ProductCard2/index'; 

const data =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/1._SY116_CB656502854_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/2._SY116_CB656502854_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/PC_QC_186x116._SY116_CB670981909_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mask_Store/4._SY116_CB656502854_.jpg"}
]

const data2 =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Dogs_1X._SY116_CB448750761_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Cats_1X._SY116_CB448750761_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Aquatics_1X._SY116_CB448750761_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/GW/Desktop/Desktop_QC_Birds_1X._SY116_CB448750760_.jpg"}
]

const data3 =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_men_1x._SY116_CB660462415_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_women_1x._SY116_CB660462414_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_boys_1xN._SY116_CB660459133_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/BirthdayStore/GW/PC_QC_girls_1xA._SY116_CB658837358_.jpg"}
]

export default class Slider7 extends Component {
    render(){
        return(
            <div style={{backgroundColor:'#EAEDED'}}>
                <Container fluid style={{ backgroundColor:'#EAEDED', width:1500 }}>
                <Row>
                <ProductCard2 title={"Digital thermometers | Starting ₹299"} image={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/tile1_PC_1x-HEALTH2._SY304_CB670262824_.jpg"} noOfImage={1} left={15} />
                <ProductCard2 title={"For your pets Dogs and Cats at your Home"} images={data2} noOfImage={4} left={385}/>
                <ProductCard2 title={"For all your photography needs you want"} image={"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Camera/Shutterbug/Fest/August/GW/379x304_Shutterbug_fest_Home_studio_photography._SY304_CB407732303_.jpg"}left={755}/>
                <ProductCard2 title={"Birthday store for special persons in hour"} images={data3} noOfImage={4} left={1125}/>
                </Row>
            </Container>
            </div>
        )
    }
}