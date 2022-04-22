
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Bords from '../components/bords/Bords';
import Footer from '../components/footer/Footer';
import Header from "../components/header/Header";
function Home(){


    return (
        <>
            <Header/>
            <Bords/>
            <Footer/>
        </>

    );
}
export default Home;