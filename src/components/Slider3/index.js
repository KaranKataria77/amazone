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
  
  export default class Slider3 extends Component {
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
        <div style={{backgroundColor:"#EAEDED", paddingBottom:40}}>
            <Container fluid style={{backgroundColor:'#fff', width:1460, marginLeft:30, marginRight:30, paddingTop:20, paddingBottom:20}}>
          <h4>For the Well-being of your love ones</h4>
          <Slider {...settings} style={{width:1410, marginLeft:10}} >
            <div>
              <Image style={{marginLeft:100}} src="https://m.media-amazon.com/images/I/41tdg5E6B1S._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginTop:20, marginLeft:40}} src="https://m.media-amazon.com/images/I/41sDV3dti-L._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:50}} src="https://m.media-amazon.com/images/I/41sQt1ScAJS._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41prHK2YlIL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:40}} src="https://m.media-amazon.com/images/I/41VrJz9fHkL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41ZXqDf9D4S._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/51TNfStjONL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41iNZltBmzL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:50}} src="https://m.media-amazon.com/images/I/41kdLbkq5cL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41OGHLFCRPL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:20, marginTop:20}} src="https://m.media-amazon.com/images/I/514vsca18gL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80}} src="https://m.media-amazon.com/images/I/41IBFcMCDRS._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:50}} src="https://m.media-amazon.com/images/I/41sBhXtKdaL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80}} src="https://m.media-amazon.com/images/I/41b+KtxgcwL._AC_SY200_.jpg" fluid />
            </div>
          </Slider>
        </Container>
        </div>
      );
    }
  }