import PropTypes from 'prop-types';
import avatarDefault from '../img/avatar-placeholder.png';

const Friend = ({ avatar, name, isOnline }) => {
    const online = isOnline ? 'isOnline' : null;

    return <li className="item">
        <span className={`status ${online}`}></span>
        <img className="avatar" src={avatar} alt={`${name}'s avatar`} width="48" />
        <p className="name">{name}</p>
    </li>
};

Friend.defaultProps = {
    avatar: avatarDefault,

};

Friend.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default Friend;