import ProfileStatsItem from './ProfileStatsItem';

const ProfileStatsList = (props) => {
    const { stats } = props;

    return <ul className="stats">
        <ProfileStatsItem statName="Followers" stats={stats.followers} />
        <ProfileStatsItem statName="Views" stats={stats.views} />
        <ProfileStatsItem statName="Likes" stats={stats.likes} />
    </ul>
};

export default ProfileStatsList;