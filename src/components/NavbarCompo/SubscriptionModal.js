import React from "react";

function SubscriptionModal() {
  return (
<div className={`fixed inset-0 z-50 `}>
  <div className="p-8 rounded-lg shadow-lg w-96 border border-white">
    <a
      href="https://www.spotify.com/in-en/premium/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white py-4 px-4 rounded-full text-center block mb-4 hover:bg-green-600"
    >
      <div
        className={`flex items-center h-8 rounded-3xl pr-2 ${
          open ? "bg-black text-white": "bg-active" 
        } hover:bg-active hover:text-white bg-black px-4 py-2 rounded-full m-2`}

        style={{ fontSize: "15px", border:'1px solid white ',borderRadius:'20px ',margin:'10px',padding:'16px 10px' }}
      >
        Explore Premium
      </div>
    </a>
  </div>
</div>

  );
}

export default SubscriptionModal;
// In your existing
