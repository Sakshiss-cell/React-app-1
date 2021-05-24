import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home=()=>{
    return(
        <React.Fragment>
            <Header/>
            <h1>My first react app</h1>
            <h2>Test</h2>
            <Footer year="2021" month="may" />
        </React.Fragment>
    );
}
export default Home