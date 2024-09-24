import React from 'react';

import '@styles/pages/home.scss'
import Form from '@widgets/Form';
import Slider from '@widgets/Slider';

import image from '@assets/images/image.png'
interface HomePageProps {
    
}
 
const HomePage: React.FunctionComponent<HomePageProps> = () => {
    return ( 
        <> 
            <Slider images={[image, image, image, image]}/>
            <Form />
        </>
     );
}
 
export default HomePage;