import './styles/Home.css'
import cube from "../assets/3dCube.gif"

const Home = () => {
    return (
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
                <h1 className='rh-title'>CODE & CONQUER</h1>
                <img src={cube} alt="3dCube" className='rh-img'/>
            </div>
        </section>
    )
}

export default Home