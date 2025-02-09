export type ChannelListPart =
  | 'auditDetails'
  | 'brandingSettings'
  | 'contentDetails'
  | 'contentOwnerDetails'
  | 'id'
  | 'localizations'
  | 'snippet'
  | 'statistics'
  | 'status'
  | 'topicDetails';

export type ChannelListFilterKey =
  | 'forHandle'
  | 'forUsername'
  | 'id'
  | 'managedByMe'
  | 'mine';

export interface ChannelListOption {
  hl?: string;
  maxResults?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
}

export interface ChannelListResponse {
  kind: 'youtube#channelListResponse';
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Channel[];
}

export interface Channel {
  kind: 'youtube#channel';
  etag: string;
  id: string;
  snippet?: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
    country?: string;
  };
  contentDetails?: {
    relatedPlaylists: {
      likes: string;
      favorites: string;
      uploads: string;
    };
  };
  statistics?: {
    viewCount: number;
    subscriberCount: number;
    hiddenSubscriberCount: boolean;
    videoCount: number;
  };
  topicDetails?: {
    topicIds?: string[];
    topicCategories?: string[];
  };
  status?: {
    privacyStatus: string;
    isLinked: boolean;
    longUploadsStatus: string;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
  };
  brandingSettings?: {
    channel?: {
      title: string;
      description: string;
      keywords: string;
      trackingAnalyticsAccountId: string;
      unsubscribedTrailer: string;
      defaultLanguage: string;
      country: string;
    };
    watch?: {
      textColor: string;
      backgroundColor: string;
      featuredPlaylistId: string;
    };
  };
  auditDetails?: {
    overallGoodStanding: boolean;
    communityGuidelinesGoodStanding: boolean;
    copyrightStrikesGoodStanding: boolean;
    contentIdClaimsGoodStanding: boolean;
  };
  contentOwnerDetails?: {
    contentOwner: string;
    timeLinked: string;
  };
  localizations?: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}
