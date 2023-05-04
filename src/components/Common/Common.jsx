import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../footer/Footer';
import Spinner from '../spinner/Spinner';


const Common = () => {
    const nveigation = useNavigation();
    return (
        <div>
            <div className="">{nveigation.state == 'loading' ? <Spinner></Spinner>:""}</div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Common;