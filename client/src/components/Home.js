import HomePng from '../assets/home.svg'

const Home = () => {
    return (
        <div className="home">
            <img src={HomePng} width="100%" height={"200%"} style={{"marginTop" : "150px"}} />
        </div>
    )
}

export default Home