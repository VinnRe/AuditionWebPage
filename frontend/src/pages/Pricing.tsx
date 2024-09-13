import './styles/Pricing.css'

const Pricing = () => {
    return (
        <main className="price-list-main">
            <section className='intro-container'>
                <div className='intro-main'>
                    <div className="candd">
                        <h1 className='conq'>Conquer</h1>
                        <h1>&nbsp;and&nbsp;</h1>
                        <h1 className='dom'>Dominate</h1>
                    </div>
                    <h1>Data Structures and Algorithms Today!</h1>
                </div>
                <div className='intro-sub'>
                    <h2>From Students to Experienced hires, improve one's skills <br />and 
                        CONQUER the challenges of Data Structures and Algorithms
                    </h2>
                </div>
            </section>
            <section className="price-list-container">
                <div className="price-list free">
                    <h1 className="price-title lib-title">Liberator</h1>
                    <div className="price-container">
                        <h1>FREE</h1>
                        <button className="price-btn free-btn">Get Started</button>
                    </div>
                    <div className="price-dec">
                        <h1>- Basic Access to the materials and activities</h1>
                    </div>
                </div>
                <div className="price-list pro">
                    <h1 className="price-title conq-title">Conquerer</h1>
                    <div className="price-container">
                        <h1>₱500</h1>
                        <button className="price-btn pro-btn">Get Started</button>
                    </div>
                    <div className="price-dec">
                        <h1>- Full Access to all the materials and activities</h1>
                        <h1>- No waiting time for submitting code</h1>
                        <h1>- Remove Ads</h1>
                    </div>
                </div>
                <div className="price-list educational">
                    <h1 className="price-title edu-title">Educational</h1>
                    <div className="price-container">
                        <h1 className='edu-price'>Contact Us for Partnership</h1>
                        <button className="price-btn edu-btn">Contact Us</button>
                    </div>
                    <div className="price-dec">
                        <h1>- Get the same features as a Conquerer</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Pricing