import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Publicidad/Banner'

const Layout = ({children}) => {

    return (
    <>
        <Header/>
        <div>
            {children}
        </div>
        <Banner/>
        <Footer/>
    </>
    )
}

export default Layout;