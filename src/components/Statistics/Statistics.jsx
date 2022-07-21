import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';
import './Statistics.css';

export const Statistics = ({ title = 'Upload stats', stats }) => {
  return (
    <section className="statistics">
      <div className="card">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {stats.map(stat => (
            <StatisticItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

// title ? <h2 className="title">{title}</h2> : 'Upload stats';

Statistics.propTypes = {
  // title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
