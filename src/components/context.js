import { createContext, useState, useRef } from "react";

export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [Singledetaildata, setSingledetaildata] = useState(
    "64fc73f01256114c5cd1b46d"
  );
  const [currentAudio, setCurrentAudio] = useState();
  const [alldata, setalldata] = useState([]);
  const [favListData, setFavListData] = useState([]);
  const [login, setlogin] = useState(false);
  const [dataAdd, setDataAdd] = useState([]);

  return (
    <MyContext.Provider
      value={{
        Singledetaildata,
        setSingledetaildata,
        currentAudio,
        setCurrentAudio,
        alldata,
        setalldata,
        favListData,
        setFavListData,
        login,
        setlogin,
        dataAdd,
        setDataAdd,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider;
