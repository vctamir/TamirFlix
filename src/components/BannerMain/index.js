import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {BannerMainContainer,ContentAreaContainer,WatchButton} from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,//https://www.youtube.com/watch?v=ETVem4WS8I0
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2019/01/Cavaleiros-do-Zodiaco.jpg'//`https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Caption>
            <ContentAreaContainer.Title>
              {videoTitle}
            </ContentAreaContainer.Title>

            <ContentAreaContainer.Description>
              {videoDescription}
            </ContentAreaContainer.Description>
          </ContentAreaContainer.Caption>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
