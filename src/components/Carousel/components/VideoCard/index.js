import React from 'react';
import {VideoCardContainer,VideoCardTitle} from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({videoTitle,videoURL,categoryColor,img}) {
  const image = img ? img : `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{borderColor: categoryColor || 'red'}}
        title={videoTitle}
      >
        <VideoCardTitle>{videoTitle}</VideoCardTitle>
      </VideoCardContainer>
    </>
  );
}

export default VideoCard;
