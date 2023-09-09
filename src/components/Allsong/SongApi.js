import axios from "axios";

export async function fetchSongs() {
  try {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://academics.newtonschool.co/api/v1/music/song",
      headers: {
        projectId: "5fwpxj9fh6yy",
      },
    };

    const response = await axios.request(config);

    const songData = response.data.data;

    console.log(` All songs, ${JSON.stringify(songData)}`);

    if (Array.isArray(songData)) {
      return songData.map((item) => ({
        id: item._id,
        title: item.title,
        artist: item.artist.length > 0 ? item.artist[0].name : "Unknown Artist",
        image: item.artist.length > 0 ? item.artist[0].image : null,
        src: item.audio_url,
      }));
    } else {
      console.error("Response data does not contain an array:", songData);
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// export async function fetchSongs() {
//   try {
//     const url = 'https://academics.newtonschool.co/api/v1/music/song';
//     const headers = {
//       'projectId': '5fwpxj9fh6yy',
//     };

//     const response = await fetch(url, { method: 'GET', headers });

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     const songData = await response.json();

//     console.log(` All songs, ${JSON.stringify(songData)}`);

//     if (Array.isArray(songData)) {
//       return songData.map((item) => ({
//         id: item._id,
//         title: item.title,
//         // artist: item.artist[0].name,
//         // image: item.artist[0].image,
//         src: item.audio_url,
//       }));
//     } else {
//       console.error('Response data does not contain an array:', songData);
//       return [];
//     }
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }






// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function SignupForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     profileName: "",
//     birthYear: "",
//     birthMonth: "",
//     birthDay: "",
//     gender: "Male", // Default value
//     receiveMarketingMessages: false,
//     shareDataWithProviders: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to the server
//     console.log(formData);
//   };

//   return (
//     <div
//       id="spotify-login-page-container"
//       style={{
//         background: "white",
//         width: "100vw",
//        height: "110vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "black",
//       }}
//     >
//       <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
//         <div
//           className="logo"
//           style={{
//             marginBottom: "10px",
//             backgroundColor: "black",
//            width:"10vw",

//           }}
//         >
//           <img
//             src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
//             alt="Spotify_Logo"
//             style={{ height: "38px" }}
//           />
//         </div>

//         <p
//           style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
//         >
//           Sign up for free to start listening.
//         </p>
//       </div>
//       <div>
//         <form
//           style={{
//             width: "26vw",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             // alignItems: 'center',
//           }}
//           onSubmit={handleSubmit}
//         >
//           <label
//             style={{
//               fontSize: "14px",
//               marginBottom: "8px",
//               fontWeight: "500",
//             }}
//           >
//             What’s your email address?
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "10px",
//               width: "30vw",
//               height: "40px",
//               color: "black",
//               border: "1px solid black",
//               borderRadius: "4px",
//               marginBottom: "20px",
//             }}
//           />
//           <label
//             style={{
//               fontSize: "14px",
//               marginBottom: "8px",
//               fontWeight: "500",
//             }}
//           >
//             Create a password{" "}
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "10px",
//               width: "30vw",
//               height: "40px",
//               color: "black",
//               border: "1px solid black",
//               borderRadius: "4px",
//             }}
//           />

//           <label
//             style={{
//               fontSize: "14px",
//               marginBottom: "8px",
//               fontWeight: "500",
//               marginTop: "20px",
//             }}
//           >
//             What should we call you?
//           </label>
//           <input
//             type="text"
//             name="profileName"
//             value={formData.profileName}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "10px",
//               width: "30vw",
//               height: "40px",
//               color: "black",
//               border: "1px solid black",
//               borderRadius: "4px",
//             }}
//           />
//           <label
//             style={{
//               fontSize: "14px",
//               marginBottom: "8px",
//               fontWeight: "500",
//               marginTop: "20px",
//             }}
//           >
//             What’s your date of birth?
//             <div style={{ display: "flex" }}>
//               <select
//                 name="birthYear"
//                 value={formData.birthYear}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: "22vw",
//                   height: "40px",
//                   color: "black",
//                   border: "1px solid black",
//                   margin: "10px 0px 10px",
//                   borderRadius: "4px",
//                 }}
//               >
//                 <option value="" style={{}}>
//                   Year
//                 </option>
//                 {Array.from({ length: 100 }, (_, i) => {
//                   const year = new Date().getFullYear() - i;
//                   return (
//                     <option key={year} value={year}>
//                       {year}
//                     </option>
//                   );
//                 })}
//               </select>
//               <select
//                 name="birthMonth"
//                 value={formData.birthMonth}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: "80vw",
//                   height: "40px",
//                   color: "black",
//                   border: "1px solid black",
//                   margin: "10px  10px 0px 10px",
//                   borderRadius: "4px",
//                 }}
//               >
//                 {/* Months */}
//                 <option value="">Month</option>
//                 <option value="1">January</option>
//                 <option value="2">February</option>
//                 <option value="3">March</option>
//                 <option value="4">April</option>
//                 <option value="5">May</option>
//                 <option value="6">June</option>
//                 <option value="7">July</option>
//                 <option value="8">August</option>
//                 <option value="9">September</option>
//                 <option value="10">October</option>
//                 <option value="11">November</option>
//                 <option value="12">December</option>
//               </select>
//               <select
//                 name="birthDay"
//                 value={formData.birthDay}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: "22vw",
//                   height: "40px",
//                   color: "black",
//                   border: "1px solid black",
//                   borderRadius: "4px",
//                   margin: "10px 0px 0px 0px",
//                 }}
//               >
//                 {/* Days */}
//                 <option value="">Day</option>
//                 {Array.from({ length: 31 }, (_, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </label>

//           <label
//             style={{
//               fontSize: "14px",
//               marginBottom: "8px",
//               fontWeight: "500",
//               marginTop: "6px",
//             }}
//           >
//             What’s your gender?
//           </label>
//           <div
//             style={{
//               width: "30vw",
//             }}
//           >
//             <input type="radio" name="gender" value="Male" style={{cursor: "pointer",}}/>
//             <label
//               htmlFor="male"
//               style={{
//                 borderRadius: "50%",
//                 marginRight: "20px",

//                 textAlign: "center",
//   marginLeft:"10px",
//                   fontSize: "16px",
//                   marginBottom: "10px",
//                   marginTop: "20px",

//               }}
//             >
//               Male
//             </label>

//             <input type="radio" name="gender" value="Female" style={{cursor: "pointer",}} />
//             <label
//               htmlFor="female"
//               style={{
//                 borderRadius: "50%",
//                 marginRight: "20px",
//                 cursor: "pointer",
//                 textAlign: "center",
//   marginLeft:"10px",
//                   fontSize: "16px",
//                   marginBottom: "10px",
//                   marginTop: "20px",

//               }}
//             >
//               Female
//             </label>

//             <input type="radio" id="Non-binary" name="gender" value="Non-binary"  style={{cursor: "pointer",}}/>
//             <label
//               htmlFor="Non-binary"
//               style={{
//                 borderRadius: "50%",
//                 marginRight: "20px",
//                 cursor: "pointer",
//                 textAlign: "center",
//   marginLeft:"10px",
//                   fontSize: "16px",
//                   marginBottom: "10px",
//                   marginTop: "20px",

//               }}
//             >
//               Non-binary
//             </label>

//             <input type="radio" id="  Other" name="gender" value="  Other" style={{cursor: "pointer",}} />
//             <label
//               htmlFor="  Other"
//               style={{
//                 borderRadius: "50%",
//                 marginRight: "20px",
//                 cursor: "pointer",
//                 textAlign: "center",
//   marginLeft:"10px",
//                   fontSize: "16px",
//                   marginBottom: "10px",
//                   marginTop: "20px",

//               }}
//             >
//              Other
//             </label>
// <br />
//             <input type="radio" id=" Prefer not to say" name="gender" value=" Prefer not to say" style={{cursor: "pointer",}} />
//             <label
//               htmlFor=" Prefer not to say"
//               style={{
//                 borderRadius: "50%",
//                 marginRight: "20px",
//                 cursor: "pointer",
//                 textAlign: "center",
//   marginLeft:"10px",
//                   fontSize: "16px",
//                   marginBottom: "8px",
//                   marginTop: "20px",

//               }}
//             >
//             Prefer not to say
//             </label>
//           </div>
//           <label
//             style={{
//               fontSize: "12px",
//               marginBottom: "2px",
//               fontWeight: "500",
//               marginTop: "20px",
//             }}
//           >
//             {" "}
//             <input
//               type="checkbox"
//               name="receiveMarketingMessages"
//               checked={formData.receiveMarketingMessages}
//               onChange={handleChange}
//               style={{ marginRight: "10px", marginTop: "6px",cursor:"pointer" }}
//             />
//             I would prefer not to receive marketing messages from Spotify
//           </label>

//         </form>
//         <div style={{
//           display:"flex" ,
//           flexDirection:"column",
//           justifyContent:"center",
//           alignItems:"center"}}>
//         <button
//             type="submit"
           
//           >
//             Sign up
//           </button>
//         <p style={{ fontSize: "14px",marginTop:"10px"}}>Have an account? <Link to="/login-Page" style={{textDecoration:"underline",cursor:"pointer",color:"#1db954",fontWeight:"bold"}}>Log in.</Link></p>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default SignupForm;
