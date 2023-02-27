import './home.styles.scss';
import HomePageNav from '../../components/HomePageNav/HomePageNav.component';
import { ReactComponent as BlueCLoud } from '../../assets/blueCloud.svg';

const Home = () => {
    return (
        <div className='home'>
            <HomePageNav />
            <h1>Home Page</h1>
            <div className='image-container'>
                <BlueCLoud />
            </div>
        </div>
    );
};

export default Home;