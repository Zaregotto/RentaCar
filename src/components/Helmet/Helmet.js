import React from 'react';

import '../../index.css'

const Helmet = (props) => {

    document.title = 'Rent Car Service -' + props.title;
    return (
        <div className="w-100">
            {props.children}
        </div>
    );
};

export {Helmet};
