import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter'

const GameOnSale = () => {
  return (
    <div className="my-8">
       <h1 className=" font-bold text-2xl text-center tinos" >
       Find Out {' '}
          <Typewriter
            words={['Game Deals Are Going On!', 'Best Deals Are Waiting For You!', 'The Latest Games Released!', 'Best Reviewed Games!']}
            loop={0}
            cursor
            cursorBlinking
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
      </h1>

      <div  className="w-[96%] mx-auto">
      <Marquee pauseOnClick  autoFill>
        <div className="my-10">
        {/* bg-gradient-to-r from-[#134e5e] to-[#71b280] */}
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/4mZY3zS/001.jpg"} />
          </div>
        </div>
        {/* 2 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/xXgFSKH/002.jpg"} />
          </div>
        </div>
        {/* 3 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/jWjJXTm/003.jpg"} />
          </div>
        </div>
        {/* 4 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/kx8yVJt/004.jpg"} />
          </div>
        </div>
        {/* 5 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/CvDLV01/005.jpg"} />
          </div>
        </div>
        {/* 6 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/jyphZj3/006.jpg"} />
          </div>
        </div>
        {/* 7 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/b7BDz70/007.jpg"} />
          </div>
        </div>
        {/* 8 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/sb3pq9J/008.jpg"} />
          </div>
        </div>
        {/* 9 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/VxTm9SQ/009.jpg"} />
          </div>
        </div>
        {/* 10 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/1TcCvd6/010.jpg"} />
          </div>
        </div>
        {/* 11 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/fCQS7sc/011.jpg"} />
          </div>
        </div>
        {/* 12 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/ky61F59/012.jpg"} />
          </div>
        </div>
        {/* 13 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/9NFxH5Z/013.jpg"} />
          </div>
        </div>
        {/* 14 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/Pcq9yqw/014.jpg"} />
          </div>
        </div>
        {/* 15 */}
        <div className="my-10">
          <div className="card card-compact mr-6 p-3 border-2 border-[#71b280]">
            <img className="w-28 h-28" src={"https://i.ibb.co.com/CVZT8S6/015.jpg"} />
          </div>
        </div>
      </Marquee>
      </div>
      
    </div>
  );
};

export default GameOnSale;
