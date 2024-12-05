import Banner from "./Banner";
import GameOnSale from "./GameOnSale";
import HighestRatedGame from "./HighestRatedGame";
import { Fade } from "react-awesome-reveal";
import UpcomingRelease from "./UpcomingRelease";


const Home = () => {
    return (
        <div> 
            <Fade>
            <Banner></Banner>
            <GameOnSale></GameOnSale>
            <UpcomingRelease></UpcomingRelease>
            <HighestRatedGame></HighestRatedGame>
            </Fade>           

        </div>
    );
};

export default Home;