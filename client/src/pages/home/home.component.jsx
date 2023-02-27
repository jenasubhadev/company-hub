
import HomePageNav from '../../components/home/navBar/navBar.component';
import Branding from '../../components/home/branding/branding.component';
// import { ReactComponent as BlueCLoud } from '../../assets/blueCloud.svg';

import './home.styles.scss';

const Home = () => {
    return (
        <div className='home'>
            <HomePageNav />
            <Branding />
            {/* <div className='image-container'>
                <BlueCLoud />
            </div> */}
        </div>
    );
};

export default Home;