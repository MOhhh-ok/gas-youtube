export type VideoListPart =
  | 'contentDetails'
  | 'fileDetails'
  | 'id'
  | 'liveStreamingDetails'
  | 'localizations'
  | 'player'
  | 'processingDetails'
  | 'recordingDetails'
  | 'snippet'
  | 'statistics'
  | 'status'
  | 'suggestions'
  | 'topicDetails';

export interface VideoListOption {
  hl?: string;
  maxHeight?: number;
  maxResults?: number;
  maxWidth?: number;
  onBehalfOfContentOwner?: string;
  pageToken?: string;
  regionCode?: string;
  videoCategoryId?: string;
}

export interface VideoListResponse {
  kind: 'youtube#videoListResponse';
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
}

export interface Video {
  kind: 'youtube#video';
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
    tags?: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage?: string;
  };
  contentDetails?: {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    regionRestriction?: {
      allowed?: string[];
      blocked?: string[];
    };
    contentRating?: Record<string, string | string[]>;
    projection: string;
    hasCustomThumbnail: boolean;
  };
  status?: {
    uploadStatus: string;
    failureReason?: string;
    rejectionReason?: string;
    privacyStatus: string;
    publishAt?: string;
    license: string;
    embeddable: boolean;
    publicStatsViewable: boolean;
    madeForKids: boolean;
    selfDeclaredMadeForKids: boolean;
    containsSyntheticMedia: boolean;
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
  };
  paidProductPlacementDetails?: {
    hasPaidProductPlacement: boolean;
  };
  player?: {
    embedHtml: string;
    embedHeight: number;
    embedWidth: number;
  };
  topicDetails?: {
    topicIds?: string[];
    relevantTopicIds?: string[];
    topicCategories?: string[];
  };
  recordingDetails?: {
    recordingDate: string;
  };
  fileDetails?: {
    fileName: string;
    fileSize: number;
    fileType: string;
    container: string;
    videoStreams?: {
      widthPixels: number;
      heightPixels: number;
      frameRateFps: number;
      aspectRatio: number;
      codec: string;
      bitrateBps: number;
      rotation: string;
      vendor: string;
    }[];
    audioStreams?: {
      channelCount: number;
      codec: string;
      bitrateBps: number;
      vendor: string;
    }[];
    durationMs: number;
    bitrateBps: number;
    creationTime: string;
  };
  processingDetails?: {
    processingStatus: string;
    processingProgress?: {
      partsTotal: number;
      partsProcessed: number;
      timeLeftMs: number;
    };
    processingFailureReason?: string;
    fileDetailsAvailability: string;
    processingIssuesAvailability: string;
    tagSuggestionsAvailability: string;
    editorSuggestionsAvailability: string;
    thumbnailsAvailability: string;
  };
  suggestions?: {
    processingErrors?: string[];
    processingWarnings?: string[];
    processingHints?: string[];
    tagSuggestions?: {
      tag: string;
      categoryRestricts?: string[];
    }[];
    editorSuggestions?: string[];
  };
  liveStreamingDetails?: {
    actualStartTime?: string;
    actualEndTime?: string;
    scheduledStartTime?: string;
    scheduledEndTime?: string;
    concurrentViewers?: number;
    activeLiveChatId?: string;
  };
  localizations?: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
}
