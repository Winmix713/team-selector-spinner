
// utils
import PropTypes from 'prop-types';
import { ReactComponent as GoalIcon } from '../assets/goal.svg';

// styling
import styles from './MatchPlayersGoals.module.scss';

const MatchPlayersGoals = ({ data }) => {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Goals</h4>
            <div className={styles.goals}>
                {data.map((player, index) => (
                    <div key={index} className={styles.playerGoal}>
                        <div className={styles.playerInfo}>
                            <span className={styles.playerName}>{player.name}</span>
                            <span className={styles.playerTime}>{player.time}'</span>
                        </div>
                        <div className={styles.goalIcon}>
                            <GoalIcon />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

MatchPlayersGoals.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
        })
    )
};

export default MatchPlayersGoals;
