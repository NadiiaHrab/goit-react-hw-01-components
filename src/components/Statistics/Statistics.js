import PropTypes from 'prop-types';
import css from './Statistics.module.css';


function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(stat => (
            <li className={css.item} key={stat.id}>
              <span className={css.statLabel}>{stat.label}</span> 
              <span className={css.statPercentage}>{stat.percentage}</span>

            </li>
          ))}
  </ul>
</section>
    )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
    })
  
  )
}

export default Statistics;