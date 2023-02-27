

import { ReactComponent as BrandingImageOne } from '../../../assets/triangle_city.svg';

import './branding.styles.scss'

const Branding = () => {
    return (
        <div className="branding-section">
            <div className="row">
                <div className="column">
                   <h1>Your Growth</h1>
                   <h1>Our Priority</h1>
                   <p>
                   A team of specialists working relentlessly for clients around the globe with a monastic focus on growth
                   using agile techniques in DevOps
                   </p>
                   <button>Talk To Our Experts</button>
                </div>
                <div className="column">
                    <div className='image-container1'>
                        <BrandingImageOne />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Column 1
                </div>
                <div className="column">
                    Column 2
                </div>
            </div>
        </div>
    )
};

export default Branding;