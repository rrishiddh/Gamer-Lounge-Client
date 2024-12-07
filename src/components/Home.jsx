import Banner from "./Banner";
import GameOnSale from "./GameOnSale";
import HighestRatedGame from "./HighestRatedGame";
import { Fade } from "react-awesome-reveal";
import UpcomingRelease from "./UpcomingRelease";
import AboutUs from "./AboutUs";


const Home = () => {
    return (
        <div> 
            <Fade>
            <Banner></Banner>
            <GameOnSale></GameOnSale>
            <UpcomingRelease></UpcomingRelease>
            <HighestRatedGame></HighestRatedGame>
            <AboutUs></AboutUs>
            </Fade>           

        </div>
    );
};

export default Home;