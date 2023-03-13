import React, {useCallback, useEffect, useState} from 'react';
import {Avatar, useChatContext} from 'stream-chat-react';

//import './EditChannel.css';

import {UserList} from '../CreateChannel/UserList';

import {CloseCreateChannel, CloseThreadIcon, InviteIcon, SearchIcon} from '../../assets';
import {ResultsDropdown} from "../ChannelSearch/ResultsDropdown";

const ChannelNameInput = (props) => {
    const {channelName = '', setChannelName} = props;

    const handleChange = (event) => {
        event.preventDefault();
        setChannelName(event.target.value);
    };

    return (
        <div className='channel-name-input__wrapper'>
            <p>Name</p>
            <input onChange={handleChange} placeholder='channel-name' type='text' value={channelName}/>
            <br />
        </div>
    );
};


const UserChannelItem = (props) => {
    const { index, setSelectedUsers, user } = props;

    console.log('user', user)

    const [selected, setSelected] = useState(false);

    const getLastActive = (i) => {
        return '';
        switch (i) {
            case 0:
                return '12 min ago';
            case 1:
                return '27 min ago';
            case 2:
                return '6 hours ago';
            case 3:
                return '14 hours ago';
            case 4:
                return 'Yesterday';
            default:
                return 'Yesterday';
        }
    };


    return (
        <div className='user-item__wrapper' onClick={() => {
            props.removeUser(user.id);
        }}>
            <div className='user-item__name-wrapper'>
                <Avatar image={user.image} name={user.name || user.id} size={32} />
                <p className='user-item__name'>{user.name || user.id}</p>
            </div>
            <p className='user-item__last-active'>{getLastActive(index)}</p>

            <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='none' viewBox='0 0 40 40'>
                <path
                    fill='var(--primary-color)'
                    fillRule='evenodd'
                    d='M27.563 25.442L22.12 20l5.442-5.442a1.496 1.496 0 000-2.12 1.496 1.496 0 00-2.121 0L20 17.878l-5.441-5.442a1.496 1.496 0 00-2.121 0 1.496 1.496 0 000 2.121L17.879 20l-5.441 5.442a1.496 1.496 0 000 2.12 1.496 1.496 0 002.12 0L20 22.122l5.442 5.442a1.496 1.496 0 002.12 0 1.504 1.504 0 000-2.121z'
                    clipRule='evenodd'
                ></path>
                <rect width='39' height='39' x='0.5' y='0.5' stroke='#E9E9EA' rx='19.5'></rect>
            </svg>
        </div>
    );
};



export const EditChannel = (props) => {
    let {filters, setIsEditing} = props;
    const {channel} = useChatContext();



    const channelMemberUsers = channel && channel.state && channel.state.members ? Object.keys(channel.state.members).map((key) => {
        const memberObj = channel.state.members[key];
        console.log('Key key', key)
        console.log('Key memberObj', memberObj)

        return memberObj.user;
    }) : []


    const [channelName, setChannelName] = useState(channel?.data.name || channel?.data.id);
    const [selectedUsers, setSelectedUsers] = useState([]);

    console.log('isUserSelected selectedUsers 11', selectedUsers)


    const updateChannel = async (event) => {
        event.preventDefault();

        const nameChanged = channelName !== (channel.data.name || channel.data.id);

        if (nameChanged) {
            await channel.update(
                {name: channelName},
                {text: `Channel name changed to ${channelName}`},
            );
        }

        if (selectedUsers.length) {
            await channel.addMembers(selectedUsers);
        }

        setChannelName(null);
        setIsEditing(false);
        setSelectedUsers([]);
    };

    const deleteChannel = async (event) => {
        event.preventDefault();

        if (window.confirm('Sure?')) {
            await channel.delete();
        }
    };

    const [focused, setFocused] = useState(undefined);
    const [focusedId, setFocusedId] = useState('');
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');


    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setFocused(undefined);
        setQuery(event.target.value);
        if (!event.target.value) return;

     //   getChannelsDebounce(event.target.value);
    };

    console.log('filters', filters);

    console.log('query', query)

    if (query) {
        filters = {
            ...filters,
            $and: [ { name: { $autocomplete: query } }]
        };
    }

    if (!channel) {
        return null;
    }


    return (
        <div className='edit-channel__container'>
            <div className='edit-channel__header'>
                <p>Edit Channel</p>
                <CloseCreateChannel {...{setIsEditing}} />
            </div>
            <ChannelNameInput {...{channelName, setChannelName}} />
            <div className='channel-name-input__wrapper'>
            <p>Current Members</p>
            </div>
                <div className='user-list__container'>
                    <div className='user-list__header'>
                        <p>User</p>
                        <p> - </p>
                        <p>Remove</p>
                    </div>

                {channelMemberUsers.map((user, i) => (
                    <UserChannelItem index={i} key={user.id} removeUser={(userId) => {
                        channel.removeMembers([userId]);
                        setChannelName(null);
                        setIsEditing(false);
                    }} user={user} />
                ))}
                </div>

            <div className="channel-name-input__wrapper">
                <p>Add Members</p>

                <div className='channel-search__input__icon'>
                    <SearchIcon />
                    </div>
                    <input
                        className='channel-name'
                        onChange={onSearch}
                        placeholder='Search'
                        type='text'
                        value={query}
                    />
             </div>

            <UserList {...{filters, setSelectedUsers, channelMemberUsers, selectedUsers}} />

            <div className='edit-channel__button-wrapper'>
                <div class="" onClick={updateChannel}>
                    <p>Save Changes</p>
                </div>
            </div>
        </div>
    );
};
