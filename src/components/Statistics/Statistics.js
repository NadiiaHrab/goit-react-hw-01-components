import PropTypes from 'prop-types';
import css from './Statistics.module.css';


function Statistics({ title, stats }) {
    return (
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        
        <ul className={css.statList}>
          {stats.map(stat => (
            <li className={css.item} style={{ backgroundColor: getRandomHexColor() }} key={stat.id}>
              <span className={css.statLabel}>{stat.label}</span> 
              <span className={css.statPercentage}>{stat.percentage}</span>

            </li>
          ))}
  </ul>
</section>
    )
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
    })
  
  )
}

export default Statistics;