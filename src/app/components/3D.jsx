"use client"
import React, { useEffect } from 'react';

const CappasityViewer = () => {
    useEffect(() => {
        // Include the Cappasity script dynamically
        const script = document.createElement('script');
        script.src = 'https://api.cappasity.com/api/player/cappasity-ai';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Remove the script when the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className=''>
            <iframe
                className='h-[100svh]'
                title="Cappasity 3D Viewer"
                width="100%"
                height="600px"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="xr-spatial-tracking"
                style={{ border: 0 }}
                src="https://api.cappasity.com/api/player/02563389-dc88-4cda-a02b-e4ab335fe239/embedded?arbutton=0&autorun=0&closebutton=1&logo=1&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=0"
            ></iframe>
        </div>
    );
};

export default CappasityViewer;

