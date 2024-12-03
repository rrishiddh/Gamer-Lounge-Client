import img01 from "./../assets/1.jpg";
import img02 from "./../assets/2.jpg";
import img03 from "./../assets/3.jpg";
import img04 from "./../assets/4.jpg";

const Banner = () => {
  return (
    <div className="mx-auto flex my-8">
      <div className="carousel w-[80%] mx-auto ">
        <div
          id="slide1"
          className="carousel-item relative w-full grid grid-cols-1 md:grid-cols-4  "
        >
          <img
            src={img01}
            className=" my-auto mx-auto rounded-lg md:col-span-1"
          />
          <p className="my-auto mx-auto w-[80%] md:col-span-3">
            {" "}
            This open-world action-adventure game lets players roam freely in a
            fictional city. Set in the fictional state of San-Andreas.Players
            can explore the vast city of Los Santos and the surrounding
            countryside.The game features a variety of missions and activities,
            including heists, races, and side quests.
          </p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full grid grid-cols-1 md:grid-cols-4  "
        >
          <img
            src={img02}
            className=" my-auto mx-auto rounded-lg md:col-span-1"
          />
          <p className="my-auto mx-auto w-[80%] md:col-span-3">
            This sandbox game allows players to build and explore vast worlds.
            Players can mine resources, build structures, and interact with a
            variety of creatures. The game offers endless possibilities for
            creativity and exploration.
          </p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full grid grid-cols-1 md:grid-cols-4  "
        >
          <img
            src={img03}
            className=" my-auto mx-auto rounded-lg md:col-span-1"
          />
          <p className="my-auto mx-auto w-[80%] md:col-span-3">
            This open-world action-adventure game is set in the American Wild
            West. Players take on the role of Arthur Morgan, a member of the Van
            der Linde gang. The game features a vast open world, a compelling
            story, and realistic gunplay.
          </p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full grid grid-cols-1 md:grid-cols-4  "
        >
          <img
            src={img04}
            className=" my-auto mx-auto rounded-lg md:col-span-1"
          />
          <p className="my-auto mx-auto w-[80%] md:col-span-3">
            This first-person shooter game is set in a modern military conflict.
            Players can engage in intense multiplayer battles or play through a
            single-player campaign. The game features realistic graphics,
            intense action, and a gripping story.{" "}
          </p>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
