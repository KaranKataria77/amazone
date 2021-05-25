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
  
  export default class Slider6 extends Component {
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
              <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41IBFcMCDRS._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41tdg5E6B1S._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41a2PtdiYVS._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginTop:0, marginLeft:0}} src="https://m.media-amazon.com/images/I/41kjxa2CzRS._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:30}} src="https://m.media-amazon.com/images/I/413tTketWOL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41usEIcluTL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41stJISXtjL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41PuUNKTtzL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginRight:0, marginTop:40}} src="https://m.media-amazon.com/images/I/41+xt3JdJJL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:30}} src="https://m.media-amazon.com/images/I/41JO4Ed7glL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:40, marginTop:30}} src="https://m.media-amazon.com/images/I/41LDcvb8JtL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80}} src="https://m.media-amazon.com/images/I/41VTyqfudkL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:100}} src="https://m.media-amazon.com/images/I/41FpejDxeWL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:50, marginTop:0}} src="https://m.media-amazon.com/images/I/41w4udQ3EeL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80}} src="https://m.media-amazon.com/images/I/41XwoSkPGsL._AC_SY200_.jpg" fluid />
            </div>
          </Slider>
        </Container>
        </div>
      );
    }
  }