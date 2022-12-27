import React from 'react';
import UseTitle from '../../Assets/Hooks/UseTitle';
import Contact from '../Shared/Contact';
import Benifits from './Benifits';
import Services from './Services';

import Slider from './Slider';

const Home = () => {

    UseTitle('Home')
    return (
        <div>
                <Slider/>
                <Benifits/>
                <Services/>
                <Contact/>
                
        </div>
    );
};

export default Home;