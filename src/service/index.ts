import {
  ChannelListFilterKey,
  ChannelListOption,
  ChannelListPart,
  ChannelListResponse,
} from '../types.channel';
import {
  getPlaylistItemsArgs,
  getPlaylistItemsResponse,
} from '../types.playlistItem';
import {
  VideoListOption,
  VideoListPart,
  VideoListResponse,
} from '../types.video';

declare const YouTube: any;

export function getChannelList(arts: {
  part: ChannelListPart[];
  filterKey: ChannelListFilterKey;
  filterValue: string;
  option?: ChannelListOption;
}): ChannelListResponse {
  const { part, filterKey, filterValue, option } = arts;
  const response = YouTube.Channels.list(part, {
    ...option,
    [filterKey]: filterValue,
  });
  return response;
}

export function getPlaylistItemList(
  args: getPlaylistItemsArgs
): getPlaylistItemsResponse {
  const { part, id, playlistId, maxResults, pageToken } = args;
  const response = YouTube.PlaylistItems.list(part, {
    id,
    playlistId,
    maxResults,
    pageToken,
  }) as getPlaylistItemsResponse;
  // console.log({ pageToken, nextPageToken: response.nextPageToken });
  if (pageToken && pageToken == response.nextPageToken) {
    throw new Error('nextPageToken is same');
  }
  return response;
}

export function getVideoList(args: {
  part: VideoListPart[];
  id: string[] | string;
  options: VideoListOption;
}): VideoListResponse {
  const { part, id, options } = args;
  const _id = typeof id === 'string' ? [id] : id;
  const response = YouTube.Videos.list(part, {
    id: _id.join(','),
    ...options,
  }) as VideoListResponse;
  return response;
}
