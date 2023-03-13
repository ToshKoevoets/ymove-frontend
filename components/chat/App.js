import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, enTranslations, Streami18n } from 'stream-chat-react';



import { getRandomImage } from './assets';
import { useChecklist } from './ChecklistTasks';
import { ChannelContainer } from './components/ChannelContainer/ChannelContainer';
import { ChannelListContainer } from './components/ChannelListContainer/ChannelListContainer';



const i18nInstance = new Streami18n({
  language: 'en',
  translationsForLanguage: {
    ...enTranslations,
  },
});


const filters = [
  { type: 'team',  },
  { type: 'messaging' },
];
const options = { state: true, watch: true, presence: true, limit: 999 };
const sort = { last_message_at: -1, updated_at: -1 };

const App = (props) => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isConnected, setIsConnected]= useState(false);
  const [chatClient, setChatClient]= useState(null);


  const urlParams = new URLSearchParams(window.location.search);
  const apiKey = urlParams.get('apikey') || props.apiKey;
  const userId = urlParams.get('userId') || props.userId;
  const user = urlParams.get('user') || props.user;

  const theme = urlParams.get('theme') || 'light';
  const userToken = urlParams.get('user_token') || props.userToken;

 // const targetOrigin = urlParams.get('target_origin') || process.env.REACT_APP_TARGET_ORIGIN;

  const targetOrigin = null;


  const connectToClient  = async () => {
    console.log('apikey', apiKey);

    const chatClient = StreamChat.getInstance(apiKey, {
      timeout: 6000,
    });

    setChatClient(chatClient)

  }

  const connectUser = async () => {


    const obj = {
      id: userId,
      name:  user.firstName + ' ' +  user.lastName,
     // image: 'https://getstream.io/random_svg/?name=' + user.firstName
    }

    console.log('chatClient',chatClient)

    const connectResponse = await chatClient.connectUser(obj, userToken);
    console.log('connectUser', connectResponse)

    setIsConnected(true);


//    useChecklist(client);
  }

  useEffect(() => {
    connectToClient()
  }, [])

  useEffect(() => {
    if (!chatClient) {
      return;
    }

    connectUser();

    const handleColorChange = (color) => {
      const root = document.documentElement;
      if (color.length && color.length === 7) {
        root.style.setProperty('--primary-color', `${color}E6`);
        root.style.setProperty('--primary-color-alpha', `${color}1A`);
      }
    };

    window.addEventListener('message', (event) => handleColorChange(event.data));

    return () => {
     // client.disconnectUser();
      window.removeEventListener('message', (event) => handleColorChange(event.data));
    };
  }, [chatClient]);

  return (
    <>
      {chatClient && isConnected && <div className='app__wrapper'>
        <Chat {...{ client: chatClient, i18nInstance }} theme={`team ${theme}`}>
          <ChannelListContainer
            {...{
              isCreating,
              filters,
              options,
              setCreateType,
              setIsCreating,
              setIsEditing,
              sort,
            }}
          />
          <ChannelContainer
            {...{
              createType,
              isCreating,
              isEditing,
              setIsCreating,
              setIsEditing,
            }}
          />
        </Chat>
      </div>}
    </>
  );
};

export default App;
