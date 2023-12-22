"use client"
import React, { useEffect } from 'react';

const CappasityViewer = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://api.cappasity.com/api/player/cappasity-ai';
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        // Clean up the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <iframe
            width="100%"
            height="600px"
            frameBorder="0"
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="xr-spatial-tracking"
            style={{ border: 0 }}
            src="https://api.cappasity.com/api/player/8e2998b2-f302-4d0e-a12b-e98903adcbd1/embedded?arbutton=0&autorun=0&closebutton=1&logo=1&analytics=1&uipadx=0&uipady=0&enablestoreurl=0&storeurl=&hidehints=0&language=&autorotate=0&autorotatetime=10&autorotatedelay=2&autorotatedir=1&hidefullscreen=1&hideautorotateopt=1&hidesettingsbtn=0"
        ></iframe>
    );
};

export default CappasityViewer;
