import React, { useEffect, useState } from 'react';
import { Avatar, useChatContext, useChannelStateContext } from 'stream-chat-react';

//import './UserList.css';

import { InviteIcon } from '../../assets';
//import user from '../../../sync/user';

const ListContainer = (props) => {
  const { children } = props;

  return (
    <div className='user-list__container'>
      <div className='user-list__header'>
        <p>User</p>
        <p> - </p>
        <p>Invite</p>
      </div>
      {children}
    </div>
  );
};

const UserItem = (props) => {
  const { index, setSelectedUsers, isUserSelected, user } = props;

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

  const handleClick = () => {
    console.log('isUserSelected', isUserSelected)
    if (isUserSelected) {
      setSelectedUsers((prevUsers) => prevUsers.filter((prevUser) => prevUser !== user.id));
    } else {
      console.log('isUserSelected SET SELECTED ', user.id)

      setSelectedUsers((prevUsers) => [...prevUsers, user.id]);
    }

    //setSelected(!selected);
  };

  return (
    <div className='user-item__wrapper' onClick={handleClick}>
      <div className='user-item__name-wrapper'>
        <Avatar image={user.image} name={user.name || user.id} size={32} />
        <p className='user-item__name'>{user.name || user.id}</p>
      </div>
      <p className='user-item__last-active'>{getLastActive(index)}</p>

      {isUserSelected ? <InviteIcon /> : <div className='user-item__invite-empty' />}
    </div>
  );
};



export const UserList = (props) => {
  const { filters, setSelectedUsers, selectedUsers, channelMemberUsers } = props;

  const { client } = useChatContext();

  const filterConditions = {
    // id: { $ne: client.userID },
    ...filters,
    //   name: { $ne: 'null null' },
  }

  if (channelMemberUsers && channelMemberUsers.length > 0) {
    filterConditions.id =  {$nin: channelMemberUsers.map(user => user.id)};
  }

  const [error, setError] = useState(false);
  const [listEmpty, setListEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      if (loading) return;

      setLoading(true);
      //
      try {
        setError(false);
        setListEmpty(false);

        const response = await client.queryUsers(
            filterConditions,
          { id: 1 },
          { limit: 12 },
        );

        const users = response && Array.isArray(response.users) ? response.users.filter(user => user.name !== 'null null') : [];

        if (response.users.length) {
          setUsers(response.users);
        } else {
          setListEmpty(true);
        }
      } catch (err) {
        setError(true);
      }

      setLoading(false);
    };

    if (client) getUsers();
  }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return (
      <ListContainer>
        <div className='user-list__message'>Error loading, please refresh and try again.</div>
      </ListContainer>
    );
  }

  if (listEmpty) {
    return (
      <ListContainer>
        <div className='user-list__message'>No users found.</div>
      </ListContainer>
    );
  }

  console.log('isUserSelected selectedUsers', selectedUsers)

  return (
    <ListContainer>
      {loading ? (
        <div className='user-list__message'>Loading users...</div>
      ) : (
        users?.length &&
        users.filter((user) => {
          console.log('USERSU', user)
          return user.name.trim() !== 'null null';
        }).map((user, i) => (
          <UserItem index={i} key={user.id} setSelectedUsers={setSelectedUsers} isUserSelected={selectedUsers && !!selectedUsers.find(userId => userId === user.id)} user={user} />
        ))
      )}
    </ListContainer>
  );
};
