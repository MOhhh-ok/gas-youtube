declare const YouTube: any;

export function getChannelIdFromHandle(handle: string) {
  const response = YouTube.Search.list('snippet', {
    q: handle,
    maxResults: 1,
    type: 'channel', // チャンネルを検索,
  });

  if (response.items.length > 0) {
    const channelId = response.items[0].snippet.channelId;
    console.log(`${handle} => ${channelId}`);
    return channelId;
  } else {
    console.log(`Could not find channel from ${handle}`);
    return null;
  }
}
