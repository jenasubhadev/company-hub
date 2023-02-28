import './services.styles.scss';

const Services = () => {
    return (
        <div className="services-section">
            <div className='call-to-action'>
                <h1>What we do</h1>
                <p>Prepare for an Agile Future</p>
                <p>
                    Maximize the ROI of your organization and empower your business to be more agile, responsive, and productive.
                    Embrace new intelligent technologies, automate inefficiencies and move your business forward.
                </p>
            </div>
            <div className='card-container'>
                <div className='card'>
                    <div className='row'>
                        <div className='image-container'>

                        </div>
                        <div className='description-container'>
                            <h3>Title</h3>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;