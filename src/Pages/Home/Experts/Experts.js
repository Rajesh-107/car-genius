import React from 'react';
import expert1 from '../../../images/expart/expert-1.jpeg';
import expert2 from '../../../images/expart/expert-2.jpeg';
import expert3 from '../../../images/expart/expert-3.jpeg';
import expert4 from '../../../images/expart/expert-4.jpeg';
import expert5 from '../../../images/expart/expert-5.jpeg';
import expert6 from '../../../images/expart/expert-6.png';
import Expert from '../Expert/Expert';
const Experts = () => {

    const experts = [
        {id:1, name: 'Will Smith', img: expert1},
        {id:2, name: 'Duke Smith', img: expert2},
        {id:3, name: 'Harald Smith', img: expert3},
        {id:4, name: 'Bold Smith', img: expert4},
        {id:5, name: 'Luke Smith', img: expert5},
        {id:6, name: 'Crish Smith', img: expert6}
    ]
    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-primary text-center'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;