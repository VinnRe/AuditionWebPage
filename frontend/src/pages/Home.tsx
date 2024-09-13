import './styles/Home.css'
import cube from "../assets/3dCube.gif"

const Home = () => {
    return (
        <main className='home-main'>
            <section className='hero-section'>
                <div className="left-hero-section">
                    <div className='h1-container'>
                        <h1>Learn and</h1>
                        <h1 className='h1-sub'> Conquer </h1>
                    </div>
                    <h1> Data Structures and Algorithms</h1>
                    <button className='start-btn'>START NOW!</button>
                </div>
                <div className="right-hero-section">
                    <img src={cube} alt="3dCube" className='rh-img'/>
                </div>
            </section>
            <section className='about-section'>
                <h1>ABOUT</h1>
                <div className="about-info">
                    <p className='about-p'>
                        With Code & Conquer, users can conquer and dominate DSA in an all-in-one web application.
                        <br />
                        <br />
                        The goal of this project is to help others learn better data structures and algorithms 
                        in one website where they won't have the need to use other sites for them to try on IDEs of their choice.
                        This website will also give activities while helping others learn and practice the topics of DSA.
                        <br />
                        <br />
                        <p className="quote">
                            "The first and greatest victory is to conquer DSA; to be conquered by DSA is of all things most shameful and vile." 
                            <br />
                            - ...Maybe Plato
                        </p>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Home