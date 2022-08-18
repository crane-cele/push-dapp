import { ToastPosition, InboxChat } from 'components/chat/w2wChat/w2wIndex'
// @ts-ignore
import { envConfig } from '@project/contracts'
import { toast } from 'react-toastify'
import { MessageIPFS } from 'helpers/w2w/ipfs'

let BASE_URL = envConfig.apiUrl
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  BASE_URL = envConfig.w2wApiUrl
} else {
  BASE_URL = envConfig.apiUrl
}

export interface Feeds {
  // This property contains all the info to be displayed on the sidebar for the other peer's information
  // Such as the decrypted message content and peer's profilePicture
  msg: InboxChat
  did: string
  wallets: string
  profilePicture: string | null
  publicKey: string | null
  about: string | null
  threadhash: string | null
  intent: string | null
  intentSentBy: string | null
  intentTimestamp: Date
  combinedDID: string
}

export interface User {
  did: string
  wallets: string
  profilePicture: string | null
  publicKey: string
  encryptedPrivateKey: string
  encryptionType: string
  signature: string
  sigType: string
  about: string | null
  name: string | null
  numMsg: number
  allowedNumMsg: number
  linkedListHash?: string | null
}

// Done
export const getInbox = async (did: string): Promise<Feeds[]> => {
  let retry = 0
  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(BASE_URL + '/v1/w2w/inbox/did/' + did, {
        method: 'POST'
      })
      if (response.status >= 500) continue
      const data: Feeds[] = await response.json()
      return data
    } catch (err) {
      if (retry > 1) {
        toast.error('An Error Occurred! Please Reload the Page', ToastPosition)
      }
      console.log('Error in the API call', err)
      retry++
      continue
    }
  }
}

// TODO: Delete this function since it's calling the same endpoint as the `getInbox` above.
// Done
export const getIntents = async (did: string): Promise<Feeds[]> => {
  let retry = 0

  for (let i = 0; i < 3; i++) {
    try {
      const response = await fetch(BASE_URL + '/v1/w2w/inbox/did', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          did
        })
      })
      const intents: Feeds[] = await response.json()
      return intents
    } catch (err) {
      console.log('Retry', retry)
      if (retry > 1) {
        toast.error('Intent cannot be loaded! Please try again later', ToastPosition)
      }
      console.log('Error in the API call', err)
      retry++
      continue
    }
  }
}

export const getUser = async ({ did = '', wallet = '' }: { did?: string; wallet?: string }): Promise<User> => {
  let retry = 0

  for (let i = 0; i < 3; i++) {
    try {
      if (did && wallet) {
        throw new Error("Both properties can't be at the same time")
      }
      let path = '/v1/w2w/users'
      if (did) {
        path += `?did=${did}`
      } else if (wallet) {
        path += `?wallet=${wallet}`
      }
      const response = await fetch(BASE_URL + path, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data: User = await response.json()
      return data
    } catch (err) {
      if (retry > 1) {
        toast.error('An Error Occurred! Please Reload the Page', ToastPosition)
      }
      console.log('Error in the API call', err)
      retry++
      continue
    }
  }
}

export const postMessage = async ({
  fromWallet,
  fromDID,
  toDID,
  messageContent,
  messageType,
  signature,
  encType,
  sigType,
  encryptedSecret
}: {
  fromWallet: string
  fromDID: string
  toDID: string
  messageContent: string
  messageType: string
  signature: string
  encType: string
  sigType: string
  encryptedSecret: string
}): Promise<MessageIPFS | string> => {
  const response = await fetch(BASE_URL + '/v1/w2w/messages', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      fromWallet,
      fromDID,
      toDID,
      messageContent,
      messageType,
      signature,
      encType,
      encryptedSecret,
      sigType
    })
  })
  if (response.status > 299) {
    throw new Error('Error posting message')
  }
  const data: MessageIPFS | string = await response.json()
  return data
}

export const createUser = async ({
  wallet,
  did,
  publicKey,
  encryptedPrivateKey,
  encryptionType,
  signature,
  sigType
}: {
  wallet: string
  did: string
  publicKey: string
  encryptedPrivateKey: string
  encryptionType: string
  signature: string
  sigType: string
}): Promise<User> => {
  const response = await fetch(BASE_URL + '/v1/w2w/users', {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      wallet,
      did,
      publicKey,
      encryptedPrivateKey,
      encryptionType,
      signature,
      sigType
    })
  })
  const data: User = await response.json()
  return data
}

export const getLatestThreadhash = async ({
  firstDID,
  secondDID
}: {
  firstDID: string
  secondDID: string
}): Promise<string> => {
  const response = await fetch(BASE_URL + '/v1/w2w/getMessages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstDID,
      secondDID
    })
  })
  if (response.status === 400) {
    throw new Error('Error fetching threadhash')
  }
  const data: { linkedlist: string } = await response.json()
  return data.linkedlist
}

export const approveIntent = async (
  fromDID: string,
  toDID: string,
  status: string,
  signature: string,
  sigType: string
): Promise<void> => {
  const response = await fetch(BASE_URL + '/v1/w2w/intents', {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      toDID,
      fromDID,
      status,
      signature,
      sigType
    })
  })
  if (response.status < 200 || response.status > 299) {
    throw new Error('Error changing intent status')
  }
}

export const createIntent = async ({
  toDID,
  fromDID,
  fromWallet,
  messageContent,
  messageType,
  signature,
  encType,
  sigType,
  encryptedSecret
}: {
  toDID: string
  fromDID: string
  fromWallet: string
  messageContent: string
  messageType: string
  signature: string
  encType: string
  sigType: string
  encryptedSecret: string
}): Promise<MessageIPFS | string> => {
  let data: MessageIPFS | string
  if (messageContent.length > 0) {
    const response = await fetch(BASE_URL + '/v1/w2w/intents', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        toDID,
        fromDID,
        fromWallet,
        messageContent,
        messageType,
        signature,
        encType,
        encryptedSecret,
        sigType
      })
    })
    data = await response.json()
  } else {
    const response = await fetch(BASE_URL + '/v1/w2w/intents', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({
        toDID,
        fromDID,
        fromWallet,
        messageType,
        signature,
        encType
      })
    })
    data = await response.json()
  }
  return data
}

export const updateUser = async ({
  did,
  wallet = '',
  profilePictureCID = ''
}: {
  did: string
  wallet?: string
  profilePictureCID?: string
}): Promise<User> => {
  const response: any = await fetch(BASE_URL + '/v1/w2w/users', {
    method: 'PUT',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify({
      did,
      wallet,
      profilePictureCID
    })
  })
  return await response.json()
}
