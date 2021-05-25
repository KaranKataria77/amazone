import React, { Component } from "react";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className={className}
        style={{ display: "block", background:"rgba(255, 255, 255, 0.9)", zIndex:1, position:"absolute",right:0, top:60, height:90, width:40, }}
        onClick={onClick}
      >
          <ArrowForwardIosIcon style={{marginLeft:10, marginTop:30}} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className={className}
        style={{ display: "block", background: "rgba(255, 255, 255, 0.9)",zIndex:1, position:"absolute",left:0,top:60, height:90, width:40, }}
        onClick={onClick}
      >
          <ArrowBackIosIcon style={{marginLeft:10, marginTop:30}} />
      </div>
    );
  }
  
  export default class Slider2 extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      return (
        <div style={{backgroundColor:"#EAEDED",paddingTop:40, paddingBottom:40}}>
            <Container fluid style={{backgroundColor:'#fff', width:1460, marginLeft:30, marginRight:30, paddingTop:20, paddingBottom:20}}>
          <h4>Amazon Response to COVID-19</h4>
          <Slider {...settings} style={{width:1410, marginLeft:10}} >
            <div>
              <Image style={{marginLeft:20}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/2X/Shoveler_covid_donation_2x._CB671054677_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:50}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/shoveller/Shoveler_covid_v2_smb_1x._CB669068181_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_homecare_1x._CB669529040_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:110}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_vaccine_1x._CB671053910_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:140}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_Blog_1x._CB669735929_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:170}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_delivery__return_1x._CB671053910_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:200}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_payment_1x._CB671053910_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:230}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/2X/Shoveler_covid_donation_2x._CB671054677_.jpg" fluid />
            </div>
          </Slider>
        </Container>
        </div>
      );
    }
  }