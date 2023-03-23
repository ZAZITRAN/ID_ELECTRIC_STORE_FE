import BlogForm from '../components/Blog-component/BlogForm';
import HeaderCata from '../components/Catalog-component/HeaderCata'
import Footer from '../components/component-recycle/Footer';
function Blogpage() {
    return ( <>
<HeaderCata textBlog="Blog"/>
<BlogForm/> 
<Footer/>
    </> );
}

export default Blogpage;