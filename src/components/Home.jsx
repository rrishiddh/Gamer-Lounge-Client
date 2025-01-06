import Banner from "./Banner";
import GameOnSale from "./GameOnSale";
import HighestRatedGame from "./HighestRatedGame";
import { Fade } from "react-awesome-reveal";
import UpcomingRelease from "./UpcomingRelease";
import AboutUs from "./AboutUs";
import NewsLetter from "./NewsLetter";


const Home = () => {
    return (
        <div> 
            <Fade>
            <Banner></Banner>
            <GameOnSale></GameOnSale>
            <UpcomingRelease></UpcomingRelease>
            <HighestRatedGame></HighestRatedGame>
            <AboutUs></AboutUs>
            <NewsLetter></NewsLetter>
            </Fade>           

        </div>
    );
};

export default Home;