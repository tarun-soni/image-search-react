import React, { useEffect, useState } from 'react';
const ImageCard = ({image}) => {
// const image 
const viewCount =  image.views
const likeCount =  image.likes
const user =  image.user
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={ image.largeImageURL} alt="" className="w-full" />
        <div className="px-6 pxy-4">
          <div className="font-bold text-blue-700 text-xl mb-2 mt-4">Photo by {user}
              <ul>
              <li ><strong className="text-black">Views:</strong>{viewCount}</li>
              <li><strong>Likes:</strong>{likeCount}</li>
            </ul>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-b-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              # tag 1
            </span>
            <span className="inline-block bg-gray-200 rounded-b-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              # tag 2
            </span><span className="inline-block bg-gray-200 rounded-b-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              # tag 3
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default ImageCard;
