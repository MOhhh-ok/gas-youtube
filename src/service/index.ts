import {
  ChannelListFilterKey,
  ChannelListOption,
  ChannelListPart,
  ChannelListResponse,
} from '../types.channel';

declare const YouTube: any;

export function getChannelList(
  part: ChannelListPart[],
  filterKey: ChannelListFilterKey,
  filterValue: string,
  option?: ChannelListOption
): ChannelListResponse {
  const response = YouTube.Channels.list(part, {
    ...option,
    [filterKey]: filterValue,
  });
  return response;
}

// export function getChannelIdFromHandle(handle: string) {
//   const response = getChannelList(['snippet'], 'forHandle', '', {});
//   const response = YouTube.Search.list('snippet', {
//     q: handle,
//     maxResults: 1,
//     type: 'channel', // チャンネルを検索,
//   });

//   if (response.items.length > 0) {
//     const channelId = response.items[0].snippet.channelId;
//     console.log(`${handle} => ${channelId}`);
//     return channelId;
//   } else {
//     console.log(`Could not find channel from ${handle}`);
//     return null;
//   }
// }
