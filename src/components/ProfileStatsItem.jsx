import PropTypes from 'prop-types';

const StatsItem = ({ statName, stats }) => (
    <li className="stats-item">
        <span className="label">{statName}</span>
        <span className="quantity">{stats}</span>
    </li>
);

StatsItem.defaultProps = {
    stats: '--',
}

StatsItem.propTypes = {
    statName: PropTypes.string.isRequired,
    stats: PropTypes.number,
};

export default StatsItem;