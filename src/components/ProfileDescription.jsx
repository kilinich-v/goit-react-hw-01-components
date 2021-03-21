import PropTypes from 'prop-types';
import avatarDefault from '../img/avatar-placeholder.png';

const ProfileDescription = (props) => {
    const { name, tag, location, avatar } = props;

    return <div className="description" >
        <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
        />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
    </div>
};

ProfileDescription.defaultProps = {
    location: '--',
    avatar: avatarDefault,
};


ProfileDescription.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
};

export default ProfileDescription;