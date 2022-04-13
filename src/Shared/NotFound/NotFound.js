import React from 'react';
import sleeping from '../../images/sleeping.jpeg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center'>Opps Site not Found!!</h2>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;