import React, { useState, useEffect } from 'react';

import { app } from '../firebase.js';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';


import Application from "./Application";
import { projectDetails } from '../constants/projectDetails.js'

const Projects = () => {
  const [imageUrls, setImageUrls] = useState([]);
  // console.log(imageUrls);

  useEffect(() => {
    // Reference to the Firebase Storage bucket
    const storage = getStorage(app);
    const storageRef = ref(storage, 'projectImages');

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
          setImageUrls(urls);
        });
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });

  }, []);

  const newProjectDetails = projectDetails.map((obj, index) => ({
    ...obj,
    imgUrl: imageUrls[index],
  }));

  return (
    <div className="bg-[#1C1C27] w-full h-full rounded-lg mt-2 px-3 py-4">
        <span className="text-white bg-[#306EE8] p-1 rounded-md">Projects</span>
      <div className="flex items-center justify-evenly flex-wrap">

        {newProjectDetails.map((project) => <Application key={project.title} imgUrl={project.imgUrl} title={project.title} description={project.description} tags={project.tags} via={project.via} code={project.code}/>)}
      </div>
    </div>
  );
};

export default Projects;
