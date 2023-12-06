import React, { useState, useEffect } from 'react';

import { app } from '../firebase.js';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

import { BsFillFileEarmarkPersonFill } from "react-icons/bs";

const Header = () => {

  const [profileImageUrls, setProfileImageUrls] = useState([]);
  const [headerImageUrls, setHeaderImageUrls] = useState([]);
  // console.log(profileImageUrls);

  useEffect(() => {
    // Reference to the Firebase Storage bucket
    const storage = getStorage(app);
    let storageRef = ref(storage, 'myProfile');

    // Fetch the list of items (myProfile) in the folder
    //result
    listAll(storageRef)
      .then((result) => {
        // console.log(result.items[1]._location.path_);
        // Get the download URL for each item and update the state
        const promises = result.items.map((itemRef) =>
          getDownloadURL(itemRef)
        );

        Promise.all(promises).then((urls) => {
          setProfileImageUrls(urls);
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });

      storageRef = ref(storage, 'header');

    // Fetch the list of items (header) in the folder
    //result
    listAll(storageRef)
      .then((result) => {
        // console.log(result.items[1]._location.path_);
        // Get the download URL for each item and update the state
        const promises = result.items.map((itemRef) =>
          getDownloadURL(itemRef)
        );

        Promise.all(promises).then((urls) => {
          setHeaderImageUrls(urls);
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });

  }, []);

  // const newProjectDetails = projectDetails.map((obj, index) => ({
  //   ...obj,
  //   imgUrl: imageUrls[index],
  // }));


  const openNewTab = () => {  
    const webLink = 'https://docs.google.com/document/d/1uih0_hfhpum4WgWBbFxECSZSAtk2L17k4HHzEbXt_wo/edit';   
    window.open(webLink, '_blank');
  };

  return (
    <div
      className="h-[80px] bg-cover bg-center rounded-xl flex items-center justify-between"
      style={{ backgroundImage: `url(${headerImageUrls[0]})` }}
    >
      <div className="flex items-center">
        <div
          className="h-16 w-16 bg-cover bg-center rounded-full border-2 border-white mx-2"
          style={{ backgroundImage: `url(${profileImageUrls[0]})` }}
        ></div>

        <p className="text-white">Janisar Akhtar</p>
      </div>
      
      <div className="bg-[#24242e] hover:bg-white text-white hover:text-[#24242e] py-1 px-2 rounded-tl-lg rounded-bl-lg flex items-center">
        <BsFillFileEarmarkPersonFill />
        <p onClick={openNewTab} className="text-sm pl-2 cursor-pointer">My Resume</p>
      </div>
    </div>
  );
};

export default Header;
