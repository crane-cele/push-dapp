export interface MessageIPFS {
    fromCAIP10: string
    toCAIP10: string
    fromDID: string
    toDID: string
    messageType: string
    messageContent: string
    signature: string
    sigType: string
    link: string | null
    timestamp?: number
    encType: string
    encryptedSecret: string
}

export interface MessageIPFSWithCID extends MessageIPFS {
    cid: string;
}

export interface User {
    did: string;
    wallets: string;
    profilePicture: string | null;
    publicKey: string;
    encryptedPrivateKey: string;
    encryptionType: string;
    signature: string;
    sigType: string;
    about: string | null;
    name: string | null;
    numMsg: number;
    allowedNumMsg: number;
    linkedListHash?: string | null;
    isAdmin?:boolean;
}
  
export interface ConnectedUser extends User {
    privateKey: string | null;
}
export interface Member {
    wallet: string;
    publicKey: string;
    image: string;
    isAdmin: boolean;
  }
export interface IGroup {
  members: { wallet: string, publicKey: string, isAdmin: boolean, image: string }[],
  pendingMembers: { wallet: string, publicKey: string, isAdmin: boolean, image: string }[],
  contractAddressERC20: string | null,
  numberOfERC20: number,
  contractAddressNFT: string | null,
  numberOfNFTTokens: number,
  verificationProof: string,
  groupImage: string | null,
  groupName: string,
  isPublic: boolean,
  groupDescription: string | null,
  groupCreator: string,
  chatId: string
}

export interface ChatMetaI {
  did: string;
  wallets: string;
  profilePicture: string | null;
  publicKey: string | null;
  about: string | null;
  threadhash: string | null;
  intent: string | null;
  intentSentBy: string | null;
  intentTimestamp: Date;
  combinedDID: string;
  cid?: string;
  groupInformation?: IGroup
}

export interface Feeds {
    msg: MessageIPFS;
    did: string;
    wallets: string;
    profilePicture: string | null;
    publicKey: string | null;
    about: string | null;
    threadhash: string | null;
    intent: string | null;
    intentSentBy: string | null;
    intentTimestamp: Date;
    combinedDID: string;
    cid?: string;
    groupInformation?: IGroup
}

export interface TwitterFeedReturnType{
    tweetId:string;
    messageType:string;
}


export interface BlockedLoadingI {
    enabled: boolean;
    title: string;
    spinnerEnabled?: boolean;
    spinnerSize?: number;
    spinnerType?: number;
    progressEnabled?: boolean;
    progress?: number;
    progressNotice?: string;
}


export interface AppContext {
  currentChat: Feeds;
  viewChatBox: boolean;
  receivedIntents: Feeds[];
  setReceivedIntents: (rIntent: Feeds[]) => void;
  setChat: (feed: Feeds) => void;
  intents: Feeds[];
  setIntents: (intents: Feeds[]) => void;
  inbox: Feeds[];
  setInbox: (inbox: Feeds[]) => void;
  pendingRequests: number;
  setPendingRequests: (pending: number) => void;
  hasUserBeenSearched: boolean;
  setHasUserBeenSearched: (searched: boolean) => void;
  loadingMessage: string;
  setLoadingMessage: (loadingMessage: string) => void;
  setBlockedLoading: (blockedLoading: BlockedLoadingI) => void;
  activeTab: number;
  setActiveTab: (active: number) => void;
  userShouldBeSearched: boolean;
  setUserShouldBeSearched: (value: boolean) => void;
  groupName:string;
  setGroupName:(value:string)=>void;
  groupDescription:string;
  setGroupDescription:(value:string)=>void;
  groupImage:string;
  setGroupImage:(value:string)=>void;
  groupType:string;
  setGroupType:(value:string)=>void;
  createGroupState:number;
  setCreateGroupState:(value:number)=>void;
  filteredUserData:User[];
  setFilteredUserData:(value:User[])=>void;
}

export type MessagetypeType = 'Text' | 'Image' | 'File' | 'GIF';

