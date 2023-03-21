import Header from "../components/component-recycle/Header";
import Footer from "../components/component-recycle/Footer"
import Slide from "../components/Slide";
import Newarrival from "../components/Newarrival";
import FeatureProduct from "../components/FeatureProduct";
import Flash from "../components/Flash";
import Toprate from "../components/Toprate";
import Blog from "../components/Blog";


function HomePage() {
    return ( 
        <>
        <Header/>
        <Slide/>
        <Newarrival/>
        <FeatureProduct/>
        <Flash/>
        <Toprate/>
        <Blog/>
        <Footer/>

        </>
     );
}

export default HomePage;