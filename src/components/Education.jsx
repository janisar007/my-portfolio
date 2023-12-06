import React, { useState, useEffect } from 'react';

import { app } from '../firebase.js';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import Institute from './Institute'
import { educationDetails } from '../constants/projectDetails'

const Education = () => {

    const [instituteImageUrls, setInstituteImageUrls] = useState([]);
  // console.log(imageUrls);

  useEffect(() => {
    // Reference to the Firebase Storage bucket
    const storage = getStorage(app);
    const storageRef = ref(storage, 'education');

    // Fetch the list of items (projectImages) in the folder
    //result
    listAll(storageRef)
      .then((result) => {
        // console.log(result.items[1]._location.path_);
        // Get the download URL for each item and update the state
        const promises = result.items.map((itemRef) =>
          getDownloadURL(itemRef)
        );

        Promise.all(promises).then((urls) => {
            setInstituteImageUrls(urls);
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });

  }, []);

  instituteImageUrls.push(instituteImageUrls[1]);
  const newEducationtDetails = educationDetails.map((obj, index) => ({
    ...obj,
    img: instituteImageUrls[index],
  }));

  return (
    <div className='bg-[#341A45] px-3 py-4 mt-4 rounded-lg w-[95%] md:w-[70%]'>
        <span className='text-white bg-[#8806CE] p-1 rounded-md'>Education</span>

        <div className='flex flex-col mt-6 gap-4 w-full items-center'>
            {
                newEducationtDetails.map((info, index) => <Institute key={index} info={info}/>)
            }
        </div>
        

    </div>
  )
}

export default Education