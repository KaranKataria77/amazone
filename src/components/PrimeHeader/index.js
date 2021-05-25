import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import LanguageIcon from '@material-ui/icons/Language';
// https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png

export default class PrimeHeader extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#232F3E', width:1518, height:60}}>
                <Container fluid style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}} >
                    <Image style={{marginTop:15, width:100, height:30}} src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light._SY32_FMpng_.png" fluid />
                    <div style={{display:'flex', flexDirection:'row', color:'#fff', marginTop:15}}>
                        <LanguageIcon style={{color:'#fff'}} /> EN
                        <p style={{fontSize:16, color:'#fff', marginLeft:20}}>Sign in</p>
                    </div>
                </Container>
            </div>
        )
    }
}
