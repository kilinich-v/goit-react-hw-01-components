const Friend = ({ avatar, name, isOnline }) => {
    const online = isOnline ? 'isOnline' : null;

    return <li className="item">
        <span className={`status ${online}`}></span>
        <img className="avatar" src={avatar} alt={`${name}'s avatar`} width="48" />
        <p className="name">{name}</p>
    </li>
};

export default Friend;