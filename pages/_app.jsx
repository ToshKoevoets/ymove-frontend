import { createContext, useEffect } from "react";
import "@/styles/theme.min.css";
import "@/styles/globals.css";
import useSWR from 'swr';
import 'stream-chat-react/dist/css/index.css';
import '@/components/chat/App.css';
import '@/components/chat/components/ChannelContainer/ChannelContainer.css';
import '@/components/chat/components/ChannelEmptyState/ChannelEmptyState.css';
import '@/components/chat/components/ChannelListContainer/ChannelListContainer.css';
import '@/components/chat/components/ChannelSearch/ChannelSearch.css';
import '@/components/chat/components/CreateChannel/UserList.css';
import '@/components/chat/components/CreateChannel/CreateChannel.css';
import '@/components/chat/components/EditChannel/EditChannel.css';
import '@/components/chat/components/PinnedMessageList/PinnedMessageList.css';
import '@/components/chat/components/TeamChannelHeader/TeamChannelHeader.css';
import '@/components/chat/components/TeamChannelList/TeamChannelList.css';
import '@/components/chat/components/TeamChannelPreview/TeamChannelPreview.css';
import '@/components/chat/components/TeamMessage/TeamMessage.css';
import '@/components/chat/components/TeamMessageInput/TeamMessageInput.css';
import '@/components/chat/components/TeamMessageInput/ThreadMessageInput.css';
import '@/components/chat/components/TeamTypingIndicator/TeamTypingIndicator.css';

const siteFetcher = (...args) => fetch(...args).then((res) => res.json())
const userFetcher = (...args) => fetch(...args).then((res) => res.json())

export const UserContext = createContext(null)
export const SiteContext = createContext(null)

export default function MyApp({
  Component,
  pageProps,
}) {
  let siteResponse = useSWR('/api/site', siteFetcher);
  const userResponse = useSWR('/api/user', userFetcher);


  if (!siteResponse.data) return <div>Loading site...</div>
  if (!userResponse.data) return <div>Loading user...</div>

  console.log('siteResponse.data', userResponse)



  return <div className={``}>
    <Component {...pageProps} site={siteResponse.data} user={userResponse.data} />
  </div>

}
