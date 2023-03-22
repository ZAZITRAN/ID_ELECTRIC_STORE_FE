import HeaderCata from '../components/Catalog-component/HeaderCata'
import Footer from '../components/component-recycle/Footer';
import React , {useEffect , useState } from 'react'
import Catagories from '../components/Catalog-component/Catagories';
function Catalog() {
    return ( <>
     <HeaderCata/>
     <Catagories/>
     <Footer/>
    </> );
}

export default Catalog;