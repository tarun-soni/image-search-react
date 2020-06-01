import React, { useEffect, useState } from 'react';
const ImageCard = ({image}) => {
// const image 
const viewCount =  image.views
const likeCount =  image.likes
const user =  image.user
const downloadCount = image.downloads
const tags = image.tags.split(',')
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={ image.webformatURL} alt="" className="w-full" />
        <div className="px-6 pxy-4">
          <div className="font-bold text-blue-700 text-xl mb-2 mt-4">
            Photo by {user}
            
              <ul>
              <li ><strong className="text-black">Views: </strong> {viewCount}</li>
              <li><strong className="text-black">Likes: </strong>{likeCount}</li>
              <li><strong className="text-black">Downloads: </strong>{downloadCount}</li>
            </ul>
          </div>
          <hr/>
          <div className="px-6 py-4">
          {
            tags.map((tag,index)=>(
              <span key={index}className="inline-block bg-gray-200 
              rounded-full px-2 py-2 text-sm font-semibold text-black-700 mt-3 mx-3">
              #{tag}
              </span>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
}
export default ImageCard;
