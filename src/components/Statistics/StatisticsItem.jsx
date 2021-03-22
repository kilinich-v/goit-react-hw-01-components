import PropTypes from 'prop-types';

const StatisticsItem = (props) => {
    const { label, percentage } = props;
    return <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
    </li>
};

StatisticsItem.defaultProps = {
    percentage: '--',

};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;