import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

        const [services, setServices] = useState([])

        useEffect(() => {
            fetch('https://peaceful-tor-59342.herokuapp.com/service')
                .then(res => res.json())
                .then(data => setServices(data))
        }, [])

        return ( <
            div id = 'services'
            className = 'container' >
            <
            div className = "row" >
            <
            h2 className = 'services-title text-primary text-center mt-5' > Our Services < /h2> <
            div className = "services-container" > {
                services.map(service => < Service key = { service._id }
                    service = { service } >
                    < /Service>)
                } <
                /div> <
                /div> <
                /div>
            );
        };

        export default Services;