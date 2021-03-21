const StatisticsItem = (props) => {
    const { id, label, percentage } = props;

    return <li className="item" key={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </li>
};

export default StatisticsItem;