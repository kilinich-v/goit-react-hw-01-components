import './statistics.scss';
import StatisticsItem from './StatisticsItem';
import statisticalData from '../../data/statistics-data.json';

const StatisticsList = () => (
    <ul className="stat-list">
        {
            statisticalData.map(({ id, label, percentage }) => (
                < StatisticsItem key={id} label={label} percentage={percentage} />
            ))
        }
    </ul>
);

export default StatisticsList;