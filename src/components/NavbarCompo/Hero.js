import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <h4 className="text-3xl text-white font-bold tracking-tight mb-6">
        Good evening
      </h4>
      
      <div className="grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all">
        <div>
          <Link to="/LikedSong">
          <div
          id="one"
          className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded"
        >
          <img
            className="w-[5rem] h-[5rem]"
            src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
          />
          <h4 className="text-[16px] font-bold p-4">Liked Song</h4>
        </div>
          </Link>
        </div>
        

        <div className="">
          <Link to="/eighties">
            <div
              id="two"
              className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded"
            >
              <img
                className="w-[5rem] h-[5rem]"
                src="https://i.scdn.co/image/ab6761610000e5ebdee5c34d4031d31de6d81dd1"
              />

              <h4 className="text-[16px] font-bold p-4">80's Song</h4>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/seventies">
            <div
              id="three"
              className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded"
            >
              <img
                className="w-[5rem] h-[5rem]"
                src="https://i.scdn.co/image/ab67616d0000b2739557c7d9748f1ad06758a00f"
              />
              <h4 className="text-[16px] font-bold p-4">70's Song</h4>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/romanticSong">
            <div
              id="four"
              className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded"
            >
              <img
                className="w-[5rem] h-[5rem]"
                src="https://i.scdn.co/image/ab67616d0000b2738305a539469ff27b916f1f2a"
              />
              <h4 className="text-[16px] font-bold p-4">Romantic song</h4>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/trending">
            <div
              id="five"
              className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded"
            >
              <img
                className="w-[5rem] h-[5rem]"
                src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default"
              />
              <h4 className="text-[16px] font-bold p-4">Daily Mix 1</h4>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/allsong">
            <div
              id="six"
              className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded"
            >
              <img
                className="w-[5rem] h-[5rem]"
                src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b27365a248c766e18522893d44c5/2/tr/default"
              />
              <h4 className="text-[16px] font-bold p-4">Daily Mix 2</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
