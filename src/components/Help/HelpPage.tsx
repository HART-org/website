import { Row, Col, Button } from 'react-bootstrap';

import { FaPaypal, FaGift } from "react-icons/fa";

import paypal_qr from '/src/assets/paypal_qrcode.jpg';
import foster_img from '/src/assets/foster-request.jpg';
import foster_img2 from '/src/assets/foster-request2.jpg';
import foster_app from '/Adoption-Application-Dog-HART.pdf'

/*add align-items-start to row classnames to align to top.*/
const HelpPage = () => {
    return (
        <div className='help-page-body'>
            <Col>
                <p style={{ marginBottom:'50px' }} className='content-text'>Do you have a HART for helping? Homeless Angels Rescue Team (HART) relies on the kindness and donations of friends and strangers around the country to help get these little angels off the streets and into loving, forever homes. </p>
                <Row className="help-page-row justify-content-center flex-column flex-md-row align-items-start" style={{ gap: '20px' }}>
                    <Col className="text-center">
                        <p className='content-title'>Are you in Texas?</p>
                        <p className='content-text'>We need fosters! To learn about fostering an angel or helping with transports, please send us a message through <a href='https://www.facebook.com/homelessangelsrescueteam' target='_blank'>our Facebook page</a>. Apply to become a foster by completing <a href={foster_app} target='_blank'>this form</a> and submitting it to the listed email.</p>
                        <img className='help-img' src={foster_img} alt="Foster Request" />
                    </Col>
                    <Col className="text-center">
                        <p className='content-title'>Are you in Rhode Island?</p>
                        <p className='content-text'>If you live in Rhode Island and have children ages 8+, reach out to <a href='https://www.smalldogrescuene.org/get-involved/foster-application/' target='_blank'>Small Dog Rescue of New England</a></p>
                        <img className='help-img' src={foster_img2} alt="Foster Request" />
                    </Col>
                    <Col className="text-center">
                        <p className='content-title'>Donations</p>
                        <p className='content-text'>No matter where you live, your donation would make a huge impact for our small dogs! Your PayPal donation will help with food and medications, or visit our Amazon wishlist:</p>
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
            </Col>
        </div>
        
    );
};

export default HelpPage;