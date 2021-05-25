import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './headerSlider.css';
import Container from 'react-bootstrap/Container';
import ProductCard from '../ProductCard/index';

const data =[
    {img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/1._SY116_CB656506073_.jpg"},
    {img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/2._SY116_CB656506073_.jpg"},
    {img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/3._SY116_CB656506073_.jpg"},
    {img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Womens_Fashion/4._SY116_CB656506073_.jpg"}
]

export default class HeaderSlider extends Component {
    render() {
        return (
            <Container style={{backgroundColor:'#EAEDED', height:800}} fluid>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Household_1500x600_V2._CB670004437_.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/1500X600._CB668498028_.png"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="grad">
                    <ProductCard title={"Pulse oximeters | Starting ₹1,499"} noOfImage={1} img={"https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/oxi-99PC-1x._SY304_CB655087945_.jpg"} left={15} />
                    <ProductCard title={"Styles for Women | Up to 70% off"} noOfImage={4} data={data} left={385}/>
                    <ProductCard title={"Pulse oximeters | Starting ₹1,499"} noOfImage={1} img={"https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/GPRC/GPRC_Desktop_CC_379x304._SY304_CB659214458_.jpg"} left={755}/>
                    <ProductCard title={"Food, beverages and Gift Items"} noOfImage={1} img={"https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/GPRC/GPRC_Desktop_CC_379x304._SY304_CB659214458_.jpg"} left={1125}/>
                </div>
            </Container>
        )
    }
}
