import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LikedSongs() {
  const navigate = useNavigate();
  useEffect(() => {
    const a = localStorage.getItem("token");
    if (!a) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-white font-semibold tracking-tight hover:underline">
        songs
      </h1>
    </div>
  );
}

export default LikedSongs;
