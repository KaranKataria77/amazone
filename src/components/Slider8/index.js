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
  
  export default class Slider8 extends Component {
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
          <h4>For the Well-being of your love ones</h4>
          <Slider {...settings} style={{width:1410, marginLeft:10}} >
            <div>
              <Image style={{marginTop:30, marginLeft:0}} src="https://m.media-amazon.com/images/I/41cVgYgAKpL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:20}} src="https://m.media-amazon.com/images/I/315AO4OdIZL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0, marginTop:20}} src="https://m.media-amazon.com/images/I/41outakMrfL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginTop:0, marginLeft:20}} src="https://m.media-amazon.com/images/I/41AJ1mqE57L._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:30}} src="https://m.media-amazon.com/images/I/51BKJByUinL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41dk2+SASqL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginTop:20}} src="https://m.media-amazon.com/images/I/31ZBLC08LLL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:20, marginTop:50}} src="https://m.media-amazon.com/images/I/41fm3PxQgOL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:50, marginTop:40}} src="https://m.media-amazon.com/images/I/41BcmBwnzJL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80}} src="https://m.media-amazon.com/images/I/41CqaA4KDzL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:40, marginTop:30}} src="https://m.media-amazon.com/images/I/41E3ejzmCPL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80, marginTop:30}} src="https://m.media-amazon.com/images/I/51mxU0WVctL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:100}} src="https://m.media-amazon.com/images/I/31gW9YJMzJL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:50, marginTop:0}} src="https://m.media-amazon.com/images/I/31OCZqdW2RL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:80}} src="https://m.media-amazon.com/images/I/31zfkzrLT+L._AC_SY200_.jpg" fluid />
            </div>
          </Slider>
        </Container>
        </div>
      );
    }
  }