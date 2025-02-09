import { Video } from './types.video';

export type PlaylistItemPart = 'contentDetails' | 'id' | 'snippet' | 'status';

export interface getPlaylistItemsArgs {
  part: PlaylistItemPart[];
  id?: string;
  playlistId?: string;
  /** 0 - 50 */
  maxResults?: number;
  pageToken?: string;
}

export interface getPlaylistItemsResponse {
  kind: 'youtube#playlistItemListResponse';
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: PlaylistItem[];
}

export interface PlaylistItem {
  kind: 'youtube#playlistItem';
  etag: string;
  id: string;
  snippet?: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    videoOwnerChannelTitle: string;
    videoOwnerChannelId: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
  contentDetails?: {
    videoId: string;
    startAt?: string;
    endAt?: string;
    note?: string;
    videoPublishedAt: string;
  };
  status?: {
    privacyStatus: string;
  };
}
