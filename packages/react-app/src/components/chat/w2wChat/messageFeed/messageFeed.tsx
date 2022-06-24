import React, { useState, useEffect, useCallback, useContext } from 'react';
import './messageFeed.css';
import DefaultMessage from '../defaultMessage/defaultMessage';
import Loader from '../Loader/Loader';
import { getLatestThreadhash } from '../../../../helpers/w2wChatHelper';
import { Context, Feeds } from '../w2wIndex';
import {fetchMessagesFromIpfs,fetchInbox} from '../w2wUtils'
import {intitializeDb} from '../w2wIndexeddb';
interface messageFeedProps {
    filteredUserData: {}[],
    isValid: boolean,
    setChat: (arg0: any) => void,
    renderInbox:any
}

export interface InboxChat {
    name: string,
    profile_picture: string,
    timestamp: number,
    lastMessage: string
}
 
const MessageFeed = (props: messageFeedProps) => {
    const { did } = useContext(Context);
    const [feeds, setFeeds] = useState([]);
    const [messagesLoading, setMessagesLoading] = useState<boolean>(true);
   
    const unCached = async (did)=>{
        const inbox = await fetchInbox(did);
        console.log(inbox);
        setFeeds(inbox);
    }
    
    const fetchMyApi = useCallback(async () => {
        console.log(did.id);
        const getMessage = await intitializeDb('Read',2,'Inbox',did.id,'','did');
        if(getMessage!==undefined)
        {
            setFeeds(getMessage.body);
        }
        else{
            await unCached(did)
        }
    }, []);

       /* setInterval(async()=>{
            const inbox = await getInbox(did.id); //[{},{}]=>"did":[]
            for(let i in inbox)
            {
                if (inbox[i]?.threadhash) {
                    const IPFSClient: IPFSHTTPClient = IPFSHelper.createIPFSClient();
                    const current = await IPFSHelper.get(inbox[i].threadhash, IPFSClient);
                    const msgIPFS: MessageIPFS = current as MessageIPFS
                    const msg: InboxChat = {
                        name: inbox[i].wallets.split(',')[0].toString().slice(0,12)+'...',
                        profile_picture:inbox[i].profile_picture,
                        lastMessage: msgIPFS.messageContent,
                        timestamp: msgIPFS.timestamp
                    };
                    if(msg.lastMessage.length>25)
                    {
                        msg.lastMessage = msg.lastMessage.slice(0,25)+'...';
                    }
                    inbox[i] = {...inbox[i],msg}
                }
            }
            inbox?.sort((a,b)=>(a.timestamp>b.timestamp?1:-1))
            await intitializeDb('Insert',2,'Inbox',did.id,inbox,'did');
            setFeeds(inbox);
        
    },10000);*/
    useEffect(() => {
       
        if (!props.isValid) {
            fetchMyApi();
        }
        else {
            const searchFn = async ()=>{
                
                if(props.filteredUserData.length)
                {
                    console.log(props);
                    let inbox = await fetchMessagesFromIpfs(props.filteredUserData);
                    const threadhash = await getLatestThreadhash(inbox.did,did.id);
                    inbox = [{...inbox[0],threadhash}]
                    
                    setFeeds(inbox);
                }
                else{

                    setFeeds([]);
                    console.log(props.filteredUserData,feeds);
                }
            }
            searchFn();
            console.log(feeds);
        }
       
        setMessagesLoading(false);
    }, [props.isValid, props.filteredUserData]);

    const setCurrentChat = (feed: any) => {
        props.renderInbox(unCached);
        props.setChat(feed);
    }

    return (
        <>
            <section className='messageFeed_body'>
                {!feeds?.length && (messagesLoading) && (
                    <div style={{ position: 'relative', textAlign: 'center', width: '100%', height: '100%' }}>
                        <Loader />
                    </div>
                )}
                {
                    (!feeds?.length && !messagesLoading) ? (
                        <p style={{ position: 'relative', textAlign: 'center', width: '100%', background: '#d2cfcf', padding: '10px' }}>
                            No Address found.
                        </p>
                    ) :
                        (!messagesLoading &&
                            <div>
                                {feeds.map((feed: Feeds) => (
                                    <div key={feed.threadhash} onClick={() => { setCurrentChat(feed) }}>
                                        <DefaultMessage inbox={feed} />
                                    </div>
                                ))}
                            </div>
                        )
                }


            </section>

        </>
    )

}

export default MessageFeed;