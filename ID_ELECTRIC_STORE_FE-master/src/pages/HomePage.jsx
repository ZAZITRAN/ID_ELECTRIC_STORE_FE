import Header from "../components/component-recycle/Header";
import Footer from "../components/component-recycle/Footer"
import Slide from "../components/HomePage-component/Slide";
import Newarrival from "../components/HomePage-component/Newarrival";
import FeatureProduct from "../components/HomePage-component/FeatureProduct";
import Flash from "../components/HomePage-component/Flash";
import Toprate from "../components/HomePage-component/Toprate";
import Blog from "../components/HomePage-component/Blog";


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