export * from './interfaces/IFetchable';
export * from './interfaces/IService';

import Playlist from './core/Playlist';
import Song from './core/Song';

import YouTubeService from './external/youtube/Service';
import YouTubeSong from './external/youtube/Song';

import SoundcloudService from './external/soundcloud/Service';
import SoundcloudSong from './external/soundcloud/Song';

export {
  Playlist,
  Song,

  YouTubeService,
  YouTubeSong,

  SoundcloudService,
  SoundcloudSong,
};
