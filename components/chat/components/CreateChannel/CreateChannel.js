import React, { useState } from 'react';
import { useChatContext } from 'stream-chat-react';

//import './CreateChannel.css';

import { UserList } from './UserList';

import { CloseCreateChannel } from '../../assets';

const ChannelNameInput = (props) => {
  const { channelName = '', setChannelName } = props;

  const handleChange = (event) => {
    event.preventDefault();
    const channelName = event.target.value ? event.target.value.replace(/[\W_]+/g, " ") : '';
    setChannelName(channelName);
  };

  return (
    <div className='channel-name-input__wrapper'>
      <p>Name</p>
      <input
        onChange={handleChange}
        placeholder='channel-name (no spaces)'
        type='text'
        value={channelName}
      />

    </div>
  );
};

export const CreateChannel = (props) => {
  const { createType, filters, setIsCreating } = props;

  const { client, setActiveChannel } = useChatContext();

  const [channelName, setChannelName] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([client.userID || '']);


  const createChannel = async (event) => {
    event.preventDefault();

    console.log('Channel name', channelName);

    try {
      const newChannel = await client.channel(createType, channelName, {
        name: channelName,
        members: selectedUsers
      });

      await newChannel.watch();

      setChannelName('');
      setIsCreating(false);
      setSelectedUsers([client.userID]);
      setActiveChannel(newChannel);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className='create-channel__container'>
      <div className='create-channel__header'>
        <p>{createType === 'team' ? 'Create a New Channel' : 'Send a Direct Message'}</p>
        <CloseCreateChannel {...{ setIsCreating }} />
      </div>
      {createType === 'team' && <ChannelNameInput {...{ channelName, setChannelName }} />}

      {false && <UserList {...{ filters, setSelectedUsers }} />}
       <div><div className='create-channel__button-wrapper' onClick={createChannel}>
        <p>{createType === 'team' ? 'Create Channel' : 'Create Message Group'}</p>
      </div></div>
    </div>
  );
};
