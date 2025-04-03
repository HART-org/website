import xioimg from '/src/assets/xio.jpg';

const AboutPage = () => {
    return (
        <div className="about-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className='content-text'>In Texas there is a large problem of strays. We rescue them and foster them with the help of volunteers until we can find homes for them in New England through a collaborating rescue; Small Dog Rescue of New England. We are one of multiple rescues they collaborate with.</p>
            <p className='content-text'>
                If you're interested in adoption please visit&nbsp;
                <a className='body-link' href='https://www.smalldogrescuene.org/' target="_blank">
                    Small Dog Rescue of New England
                </a>
            </p>
            <img src={xioimg} alt="Xio" className='about-img' />
        </div>
    );
};

export default AboutPage;