import Iframe from "react-iframe";

const UpcomingRelease = () => {
  const youtubeUrl =
    "https://www.youtube.com/embed/QdBZY2fkU-0?si=6mQ560kxHA1AeTYY";
  return (
    <div className="w-[90%] mx-auto my-8">
      <div className="hero bg-base-200 min-h-screen rounded-xl px-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Iframe
            url={youtubeUrl}
            // height="270"
            id="myIframe"
            className="max-w-xl h-48 md:h-72 max-sm:max-w-sm max-sm:mx-auto  rounded-lg shadow-2xl aspect-video "
            display="initial"
            position="relative"
            allowFullScreen
          />

          <div className="" >
            <h1 className="max-sm:mt-6 max-sm:text-center text-4xl max-sm:text-2xl font-bold text-red-400">
              Upcoming Hot Release: <br /> Grand Theft Auto VI
            </h1>
            <p className="py-6 text-lg font-medium">
            Grand Theft Auto VI is one of the most anticipated games of all time. <br />Here&apos;s what we know so far:
            </p>
            <span className="space-y-2 text-sm font-medium italic">
            <p>Release Date: Late 2025 (estimated)</p>
            <p>Platforms: PlayStation 5, Xbox Series X/S, PC (potential)
            </p>
            <p>Setting: Vice City (rumored)
            </p>
            <p>Story: Dual protagonists, a brother and sister duo (rumored)
            </p>
            </span>
            <p className="my-3 font-medium">What to Expect: Immerse yourself in a massive, open world teeming with activities and side missions. Engage with a gripping storyline featuring multiple protagonists, brought to life by cutting-edge graphics and realistic visuals. Experience innovative gameplay mechanics and features as you explore a vibrant and diverse city.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingRelease;
