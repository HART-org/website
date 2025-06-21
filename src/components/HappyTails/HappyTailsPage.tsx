import Row from 'react-bootstrap/Row';

import scottie from '/src/assets/HappyTails/scottie.jpg';
import chuchu from '/src/assets/HappyTails/chuchu.jpg';
import max from '/src/assets/HappyTails/max.jpg';
import tito from '/src/assets/HappyTails/tito.jpg';
import moose from '/src/assets/HappyTails/moose.jpg';

const AboutPage = () => {
    return (
        <div style={{ marginTop:"70px" }}>
            <p className='content-title' style={{marginBottom:'30px'}}>Happy Tails from some of our rescues!</p>
            <Row className='tails-tale'>
                <img src={scottie} alt="Scottie" className="tails-img" />
                <p className='tails-text'>Scottie overcame incredible odds, including a mangled leg, broken jaw, and the cutest little deformed eye, as well as heartworms and other serious health issues. Today, thanks to this amazing rescue, he's a happy, healthy, and surprisingly strong little guy who even models on Chewy!</p>
            </Row>
            <Row className='tails-tale'>
                <img src={chuchu} alt="Chu Chu" className="tails-img" />
                <p className='tails-text'>Chu Chu is enjoying all that coastal New England has to offer with his new Mom, including trips to the beach.</p>
            </Row>
            <Row className='tails-tale'>
                <img src={max} alt="Max" className="tails-img" />
                <p className='tails-text'>Mr. Max was a stray in Texas. He was a little worse for wear when he came in but he’s now living the best life in New England.</p>
            </Row>
            <Row className='tails-tale'>
                <img src={tito} alt="Tito" className="tails-img" />
                <p className='tails-text'>Tito was adopted in New England but his bestie and fellow foster dog in Texas was REALLY missing him. Tito’s new adopter was willing to open her heart and home to also adopt Tito’s best friend so they could live happily ever after together.</p>
            </Row>
            <Row className='tails-tale'>
                <img src={moose} alt="Moose" className="tails-img" />
                <p className='tails-text'>Moose is loving life in New England but his favorite thing is snuggling up with his human brother.</p>
            </Row>
        </div>
    );
};

export default AboutPage;