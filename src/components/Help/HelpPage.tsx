import { Row, Col, Button } from 'react-bootstrap';

import { FaPaypal, FaGift } from "react-icons/fa";

import paypal_qr from '/src/assets/paypal_qrcode.jpg';
import foster_img from '/src/assets/foster-request.jpg';

/*add align-items-start to row classnames to align to top.*/
const HelpPage = () => {
    return (
        <Row className="help-page-row justify-content-center flex-column flex-md-row align-items-start">
            <Col className="text-center">
                <p className='content-title'>Are you in Texas?</p>
                <p className='content-text'>We need fosters! If you would like to learn more about fostering an angel, please reach out to us.</p>
                <img className='help-img' src={foster_img} alt="Foster Request" />
            </Col>
            <Col className="text-center">
                <p className='content-title'>Donations</p>
                <p className='content-text'>Not in Texas or want to help us financially? We would greatly appreciate your donations!</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <Button href={"https://www.paypal.com/paypalme/XBeeks?locale.x=en_US"} target="_blank" className='paypal-button'>
                        <FaPaypal size={30} style={{ margin: '0px' }} />
                    </Button>
                    <Button href={"https://www.amazon.com/hz/wishlist/ls/DYL3MFM8V5X1/ref=nav_wishlist_lists_1"} target="_blank" className='gift-button'>
                        <FaGift size={30} style={{ margin: '0px' }} />
                    </Button>
                </div>
            <img src={paypal_qr} alt="QR Code" id='qr-code' />
            </Col>
        </Row>
    );
};

export default HelpPage;