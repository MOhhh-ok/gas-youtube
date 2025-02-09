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

export interface PlaylistItem extends Video {}
