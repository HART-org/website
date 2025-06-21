import xioimg from '/src/assets/xio.jpg';
import jenimg from '/src/assets/jen.jpg';

const AboutPage = () => {
    return (
        <div className="about-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ marginBottom:'30px' }} className='content-text'>
                Texas has one of the highest stray dog populations in the country, due to issues such as population density and a lack of spay and neuter laws. Animal shelters and dog rescues across Texas are at a crisis-level of overcrowding, with more stray and abandoned puppies and dogs than ever. The Best Friends Animal Society, an animal welfare nonprofit organization, estimates that more than 568,000 dogs and cats entered shelters in Texas in 2023, and more than 82,600 dogs and cats were euthanized in Texas that year, more than in any other state.
                <br/><br/>Homeless Angels Rescue Team is a 501(c)(3) nonprofit, ground-level organization that relies on our foster homes and financial donations to help the small dogs we rescue from the streets to find loving, forever homes. To do that, we are one of several rescue organizations that collaborate with Small Dog Rescue of New England.
                <br/><br/>If you are interested in adopting one of our homeless angels, please visit <a href='https://www.smalldogrescuene.org/' target="_blank">Small Dog Rescue of New England</a>. All HART dogs are microchipped for their safety using FiNano. Once you adopt, you can register your dog's microchip <a href='https://nano.tryfi.com/register/chip?id=&petId=' target='_blank'>here</a>.
            </p>
            <p className='content-title'>About Us</p>
            <p className='content-text'>
                Originally from Cuba, Xio has had a deep love and compassion for animals since early childhood. Her journey in animal rescue began in 2005, when she started independently rescuing dogs and cats from the streets and shelters of Houston. Driven by a heartfelt promise to make a difference in their lives, she dedicated herself to giving these animals a second chance at finding safe, loving, and permanent homes.
                <br/><br/>In 2013, Xio formally founded HARTAllCreatures, a foster-based animal rescue group committed to saving and rehabilitating abandoned and neglected animals. After several years of operating independently, her efforts evolved into a fully recognized nonprofit organization. On January 11, 2019, HARTAllCreatures was officially granted 501(c)(3) status.
                <br/><br/>With years of hands-on experience and unwavering commitment, Xio continues to lead the organization with compassion, focusing on rescue, rehabilitation, and responsible rehoming. Her work remains a testament to the promise she made in 2005—to be a voice for the voiceless and a lifeline for animals in need.
            </p>
            <img src={xioimg} alt="Xio" className='about-img' />
            <p className='content-text'>
                Born and raised on the scenic seacoast of New Hampshire, Jen has always had a deep love for animals and a natural instinct to help those in need. Over the years, she has welcomed several dogs into her home—rehoming three from friends and family, and later adopting her beloved Frankie from Homeless Angels HART.
                <br/><br/>Driven by compassion and a strong sense of purpose, Jen is an active volunteer within the New Hampshire and Massachusetts rescue community and serves as a dedicated remote volunteer with HARTAllCreatures. Her strong desire to help and support Frankie's rescue group, and her relationship with the two directors at the time, gained her one of our director positions on the board. Her unwavering love and dedication to dogs in need have made her an essential part of the rescue mission.
                <br/><br/>In close partnership with HART’s founder, Xio, Jen helps bridge the gap between Texas and New England—supporting social media, fundraising,  fostering connections, and expanding opportunities for rescued animals to find their forever homes across state lines.
                <br/><br/>Jen’s work reflects her heartfelt belief that every dog deserves a chance, no matter where they come from.
            </p>
            <img src={jenimg} alt="Jen" className='about-img' />
        </div>
    );
};

export default AboutPage;