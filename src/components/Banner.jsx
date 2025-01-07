import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img01 from "./../assets/01.png";
import img02 from "./../assets/02.png";
import img03 from "./../assets/03.png";
import img04 from "./../assets/04.png";

const Banner = () => {
  return (
    <div className="  md:flex items-center">
      <Carousel
        autoFocus
        autoPlay
        infiniteLoop={true}
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {[
          { img: img01, text: "This open-world action-adventure game lets players roam freely in a fictional city. Set in the fictional state of San-Andreas. Players can explore the vast city of Los Santos and the surrounding countryside." },
          { img: img02, text: "This sandbox game allows players to build and explore vast worlds. Players can mine resources, build structures, and interact with a variety of creatures. The game offers endless possibilities for creativity and exploration." },
          { img: img03, text: "This open-world action-adventure game is set in the American Wild West. Players take on the role of Arthur Morgan, a member of the Van der Linde gang. The game features a vast open world, a compelling story, and realistic gunplay." },
          { img: img04, text: "This first-person shooter game is set in a modern military conflict. Players can engage in intense multiplayer battles or play through a single-player campaign. The game features realistic graphics, intense action, and a gripping story." },
        ].map(({ img, text }, index) => (
          <div key={index} className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 max-md:pt-4  w-[90%]">
            <figure className="md:h-[70%] max-md:w-[50%] max-md:mx-auto my-auto ">
              <img
                src={img}
                className="my-auto mx-auto rounded-lg md:col-span-1 max-h-full object-contain max-md:h-[50%] max-sm:outline  outline-offset-4 outline-[#71b280]"
              />
            </figure>
            <p className="my-auto mx-auto w-[80%] md:col-span-3 max-md:text-sm text-justify">
              {text}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
