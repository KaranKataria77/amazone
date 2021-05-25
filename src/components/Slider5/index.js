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
  
  export default class Slider5 extends Component {
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
              <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41nSaQ7kpEL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/51B3UjhVTKL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41nhBCXKO9L._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginTop:20, marginLeft:0}} src="https://m.media-amazon.com/images/I/518I58T1eLL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:30}} src="https://m.media-amazon.com/images/I/5114kQOf1bL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41dd0+SPuTL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/418FG+HoyqL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/31RAYuaSEbL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginRight:0}} src="https://m.media-amazon.com/images/I/41HGh6KwU-L._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/51Rf9VWSH4L._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0, marginTop:0}} src="https://m.media-amazon.com/images/I/51OH92FuXuL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/51PYfdreOcS._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/41YtZUgeOSL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginRight:0, marginTop:20}} src="https://m.media-amazon.com/images/I/41mJaE8AnXL._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:30}} src="https://m.media-amazon.com/images/I/31-oAnRID4L._AC_SY200_.jpg" fluid />
            </div>
            <div>
            <Image style={{marginLeft:0}} src="https://m.media-amazon.com/images/I/51Y3UXpXEkL._AC_SY200_.jpg" fluid />
            </div>
          </Slider>
        </Container>
        </div>
      );
    }
  }