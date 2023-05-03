import React from 'react';
import img1 from '../../src/assets/404_page_cover.jpg'
import Header from '../shared/Header';
const ErrorPage = () => {
    return (
        <>
            <Header></Header>
            <div className='flex justify-center mt-5'>

                <img src={img1} alt="" />
            </div>
        </>
    );
};

export default ErrorPage;