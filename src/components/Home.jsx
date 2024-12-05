import Banner from "./Banner";
import HighestRatedGame from "./HighestRatedGame";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    return (
        <div> 
            <Fade cascade >
            <Banner></Banner>
            <HighestRatedGame></HighestRatedGame>
            </Fade>           

        </div>
    );
};

export default Home;