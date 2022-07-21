import PropTypes from 'prop-types';
import './Statistics.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticItem = ({ label, percentage }) => {
  return (
    <li className="item" style={{ background: getRandomHexColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
