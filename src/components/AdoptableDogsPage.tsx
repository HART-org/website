import { useEffect } from 'react';

const AdoptableDogsPage = () => {

    useEffect(() => {
        // Load Facebook SDK
        if (!window.FB) {
        const script = document.createElement('script');
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0';
        document.body.appendChild(script);
        } else {
        window.FB.XFBML.parse();
        }
    }, []);

    return (
        
        <div className="page-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className='adopt-title-text'>
                Visit our album on <button 
                    className='facebook-btn' 
                    onClick={() => window.open("https://www.facebook.com/media/set?set=a.705865585619587&type=3", "_blank")}
                    >
                        Facebook
                    </button>
            </p>
            <div
                className="fb-post"
                data-href="https://www.facebook.com/media/set?set=a.705865585619587&type=3"
                data-width="500"
            ></div>
        </div>
        
    );

};

export default AdoptableDogsPage;