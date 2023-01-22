import React from 'react';
import Hexagon from 'react-hexagon';


const FeatureHexagons = (props) => {
    const hexagons = props.features.map((feature, index) => {
        return (
            <Hexagon 
                key={index}
                className="relative text-center text-white bg-indigo-500 p-3"
                style={{position: 'absolute', top: '50%', left: '50%'}}
                data-tooltip={feature}
            >
                <div className="hexagon-feature-text">{feature}</div>
            </Hexagon>
        )
    });

    return (
        <div className="relative rounded-full h-64 w-64 mx-auto">
            {hexagons}
        </div>
    );
};

export default FeatureHexagons;
