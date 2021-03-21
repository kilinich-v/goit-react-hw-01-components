import ProfileStatsList from './ProfileStatsList';
import ProfileDescription from './ProfileDescription';
import profileData from '../data/profile.json';

const Profile = () => {
    const { name, tag, location, avatar, stats } = profileData;

    return <div className="profile">
        <ProfileDescription name={name} tag={tag} location={location} avatar={avatar} />
        <ProfileStatsList stats={stats} />
    </div>
};

export default Profile;