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
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_372x232_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY232_CB448746407_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"}
]

const data3 =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/Beauty_BAY-186x116_QC-Makeup._SY116_CB431333301_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/BeautyBAY-186x116QC-Haircare._SY116_CB448752655_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/November/BeautyBAY-186x116QC-Makeup._SY116_CB448752655_.jpg"},
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Beauty/Beauty_BAY-186x116_QC--Makeup._SY116_CB431333301_.jpg"}
]

export default class Slider4 extends Component {
    render(){
        return(
            <div style={{backgroundColor:'#EAEDED'}}>
                <Container fluid style={{ backgroundColor:'#EAEDED', width:1500 }}>
                <Row>
                <ProductCard2 title={"Pick from these types of masks for you"} images={data} noOfImage={4} left={15} />
                <ProductCard2 title={'Cookware & dining at 45% huge discount'} images={data2} noOfImage={4} left={385}/>
                <ProductCard2 title={"Masks and other safety supplies"} image={"https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Diwali2019/Rishab/Auto_Biss/BISS/PC_CC/BISS_260x2601._SY304_CB669949363_.jpg"}left={755}/>
                <ProductCard2 title={"Beauty products at 60% off for womens"} images={data3} noOfImage={4} left={1125}/>
                </Row>
            </Container>
            </div>
        )
    }
}