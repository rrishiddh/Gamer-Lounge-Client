import Iframe from "react-iframe";

const UpcomingRelease = () => {
  const youtubeUrl = "https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&mute=1&si=6mQ560kxHA1AeTYY";

  return (
    <div className="   my-8">
      <div className="hero w-[90%] mx-auto rounded-xl p-10">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10">
          <Iframe
            url={youtubeUrl}
            id="myIframe"
            className="w-[100%] mx-auto  rounded-lg shadow-2xl aspect-video "
            display="initial"
            position="relative"
            allowFullScreen
          />

          <div className="text-justify">
            <h1 className="tinos  text-3xl max-sm:text-xl font-bold text-red-400">
              Upcoming Hot Release: <br /> Grand Theft Auto VI
            </h1>
            <p className="py-2 font-bold">
            Grand Theft Auto VI is one of the most anticipated games of all time. 
            </p>
            <p className="mb-2"> <br />Here&apos;s what we know so far :</p>
            <span className="space-y-2 text-sm  italic">
            <p className=" text-sm"> <span className="underline ">Release Date</span> : Late 2025 (estimated)</p>
            <p className=" text-sm"><span className="underline ">Platforms</span> : PlayStation 5, Xbox Series X/S, PC (potential)
            </p>
            <p className=" text-sm"><span className="underline ">Setting </span> : Vice City (rumored)
            </p>
            <p className=" text-sm"><span className="underline ">Story </span> : Dual protagonists, a brother and sister duo (rumored)
            </p>
            
            <p className=" text-sm"> <span className="underline ">What to Expect </span> : Immerse yourself in a massive, open world teeming with activities and side missions. Engage with a gripping storyline featuring multiple protagonists, brought to life by cutting-edge graphics and realistic visuals. Experience innovative game-play mechanics and features as you explore a vibrant and diverse city.</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRelease;
