import { Slide } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="my-10 px-6">
      <Slide cascade>
        <div className=" rounded-lg shadow-xl p-8 md:w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
          <p className="text-lg  mb-4">
            Welcome to <strong>Gamer Lounge</strong>, the ultimate destination
            for gamers of all kinds! Our purpose is to create a vibrant
            community where gaming enthusiasts can share reviews, discover
            top-rated games, and build their personal watch-lists. Whether
            you&apos;re into action-packed adventures, immersive RPGs, or indie
            gems, Gamer Lounge is here to guide you through your gaming
            journey.
          </p>
          <p className="font-light  mb-4">
            At Gamer Lounge, we believe in the power of gaming to bring people
            together, inspire creativity, and provide countless hours of
            entertainment. Our platform is built to celebrate the passion and
            diversity of the gaming community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="italic " >
          <h3 className="text-xl font-semibold mt-8 mb-4">Contact Us</h3>
          <p className="text-sm mb-2">
            <strong>Email:</strong> support@abc.com
          </p>
          <p className="text-sm mb-2">
            <strong>Phone:</strong> +880-1711-GAMER-LOUNGE
          </p>
          <p className="text-sm">
            <strong>Address:</strong> 123 Gaming Street, Gulshan, Dhaka City.
          </p>
          </div>
          <div className="items-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.88962097372!2d90.37730962192968!3d23.796855529941773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a7ba38543b%3A0x91d5f14ad296d72e!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1733569556715!5m2!1sen!2sbd" className="h-[100%] w-[80%] border-2" ></iframe>
          </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default AboutUs;
