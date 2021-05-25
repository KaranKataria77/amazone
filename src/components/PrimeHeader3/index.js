import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
// https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg

export default class PrimeHead3 extends Component {
    render() {
        return (
            <div style={{paddingTop:50}}>
                <Container fluid>
                    <Row>
                        <Col style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Image src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg" fluid />
                        <h3>Watch Anywhere</h3>
                        <p style={{fontSize:18, paddingLeft:30}}>Enjoy from the web or with the Prime Video app on your phone, tablet, or select Smart TVs — on up to 3 devices at once.</p>
                        </Col>
                        <Col style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Image src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg" fluid />
                        <h3>Download and go</h3>
                        <p style={{fontSize:18, paddingLeft:30}}>Watch offline on the Prime Video app when you download titles to your iPhone, iPad, Tablet, or Android device.</p>
                        </Col>
                        <Col style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                        <Image src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png" fluid />
                        <h3>Data Saver</h3>
                        <p style={{fontSize:18, paddingLeft:30}}>Control data usage while downloading and watching videos on select phones or tablets</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
