import PropTypes from 'prop-types';
import { StatisticItem } from './StatisticItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {stats.map(stat => (
        <StatisticItem
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
      ))}
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
