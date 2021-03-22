import './friends.scss';
import friends from '../../data/friends.json';
import Friend from './Friend';

const FriendList = () => (
    <ul className="friend-list">
        {friends.map(({ avatar, name, isOnline, id }) => (
            <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
    </ul>
);

export default FriendList;