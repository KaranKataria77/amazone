import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo5.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import LanguageIcon from '@material-ui/icons/Language';

const country =["Australia","Brazil", "Canada", "China", "France","Germany","Italy", "Japan", "Mexico","Netherland", "Poland"," Singapore", "Spain", "Turkey", "United Arab Emirrites", "United Kingdom", "United state"]

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="backToTop">
                    <p style={{marginTop:10}}>Back to Top</p>
                </div>
                <div className="connect">
                    <Container style={{marginLeft:250}}>
                        <Row>
                            <Col style={{display:'flex', flexDirection:'column', color:'#fff', alignItems:'center', marginTop:20}}>
                                <h4 style={{fontSize:16, fontWeight:'700', alignSelf:'flex-start'}}>Get to know us</h4>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>About us</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Careers</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Press Releases</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Amazon Cares</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Gift a smile</p>
                            </Col>
                            <Col style={{display:'flex', flexDirection:'column', color:'#fff', alignItems:'center', marginTop:20}}>
                                <h4 style={{fontSize:16, fontWeight:'700', alignSelf:'flex-start'}}>Connect with us</h4>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Facebook</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Twitter</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Instagram</p>
                            </Col>
                            <Col style={{display:'flex', flexDirection:'column', color:'#fff', alignItems:'center', marginTop:20}}>
                                <h4 style={{fontSize:16, fontWeight:'700', alignSelf:'flex-start'}}>Make money with us</h4>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Sell on Amazon</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Sell under Accelator</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Amazon Global Selling</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Become an allifate</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Fulfilment of Amazon</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Advertise your Product</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Amazon pay on merchants</p>
                            </Col><Col style={{display:'flex', flexDirection:'column', color:'#fff', alignItems:'center', marginTop:20}}>
                                <h4 style={{fontSize:16, fontWeight:'700', alignSelf:'flex-start'}}>Let us Help you</h4>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>COVID-19 and amazon</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Your account</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Return Center</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>100% Purchase protection</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Amazon assitant download</p>
                                <p style={{fontSize:15, alignSelf:'flex-start'}}>Help</p>
                            </Col>
                        </Row>
                    </Container>
                    <div className="line" style={{borderTopWidth:1, borderTopColor:'#BDBDB7', marginTop:40}}>
                        <Container>
                            <Row style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Image style={{width:100, height:30, marginTop:10, marginRight:100}} src={logo} fluid />
                                <Button style={{backgroundColor:'#232F3E', borderColor:'#BDBDB7', borderWidth:0.5}}>
                                    <LanguageIcon style={{paddingRight:7}} />
                                    English
                                </Button>
                            </Row>
                            <Row style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:50, marginTop:20}} >
                                {
                                    country.map((name, key) => (
                                        <p key={key} style={{color:"#fff", marginLeft:20, fontSize:12}} >{name}</p>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}
