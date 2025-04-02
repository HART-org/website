import { Row, Col, Button } from 'react-bootstrap';

import { FaPaypal } from "react-icons/fa";

import paypal_qr from '/src/assets/paypal_qrcode.jpg';

/*add align-items-start to row classnames to align to top.*/
const HelpPage = () => {
    return (
        <Row className="help-page-row justify-content-center flex-column flex-md-row">
            <Col className="text-center">
            <p className='content-title'>Are you in Texas?</p>
            <p className='content-text'>We need fosters! If you would like to learn more about fostering an angel, please reach out to us!</p>
            </Col>
            <Col className="text-center">
            <p className='content-title'>Donations</p>
            <p className='content-text'>Not in Texas or want to help us financially? We would greatly appreciate your donations!</p>
            <Button href={"https://www.paypal.com/paypalme/XBeeks?locale.x=en_US"} target="_blank" style={{ marginBottom:'10px' }} className='content-button'>
                <FaPaypal size={30} style={{ margin:'0px' }}/>
            </Button>
            <img src={paypal_qr} alt="QR Code" id='qr-code' />
            </Col>
        </Row>
    );
};

export default HelpPage;