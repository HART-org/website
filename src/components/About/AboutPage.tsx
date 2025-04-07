import xioimg from '/src/assets/xio.jpg';

const AboutPage = () => {
    return (
        <div className="about-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ marginBottom:'30px' }} className='content-text'>
                Texas has one of the highest stray dog populations in the country, due to issues such as population density and a lack of spay and neuter laws. Animal shelters and dog rescues across Texas are at a crisis-level of overcrowding, with more stray and abandoned puppies and dogs than ever. The Best Friends Animal Society, an animal welfare nonprofit organization, estimates that more than 568,000 dogs and cats entered shelters in Texas in 2023, and more than 82,600 dogs and cats were euthanized in Texas that year, more than in any other state.<br/><br/>Homeless Angels Rescue Team is a 501(c)(3) nonprofit, ground-level organization that relies on our foster homes and financial donations to help the small dogs we rescue from the streets to find loving, forever homes. To do that, we are one of several rescue organizations that collaborate with Small Dog Rescue of New England.<br/><br/>If you are interested in adopting one of our homeless angels, please visit <a href='https://www.smalldogrescuene.org/' target="_blank">Small Dog Rescue of New England</a>
            </p>
            <img src={xioimg} alt="Xio" className='about-img' />
        </div>
    );
};

export default AboutPage;