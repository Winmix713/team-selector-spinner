
// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import PlayerInfo from '@components/PlayerInfo';

// hooks
import { useThemeProvider } from '@contexts/themeContext';

// assets
import BarSvg from '@assets/bar.svg';

const PlayerDiscipline = () => {
    const { direction } = useThemeProvider();
    
    return (
        <Spring className="card h-1 d-flex flex-column justify-content-between">
            <PlayerInfo wrapperClass="card-padded"
                        title="Romelu Lukaku"
                        subtitle="Discipline record"
                        number={4}/>
            <div className={`${styles.footer} card_footer border-top d-flex flex-column g-16`}>
                <div className="d-flex align-items-center justify-content-between">
                    <h3>3</h3>
                    <div className={`${styles.card_wrapper}`}>
                        <span className={`${styles.card} ${styles.yellow} ${styles[direction]}`}/>
                        <span className={`${styles.card} ${styles.yellow} ${styles[direction]}`}/>
                        <span className={`${styles.card} ${styles.yellow} ${styles[direction]}`}/>
                    </div>
                </div>
                <img src={BarSvg} alt="Bar" style={{ color: 'var(--accent)' }}/>
                <div className="d-flex align-items-center justify-content-between">
                    <h3>1</h3>
                    <div className={styles.card_wrapper}>
                        <span className={`${styles.card} ${styles.red}`}/>
                    </div>
                </div>
            </div>
        </Spring>
    );
};

export default PlayerDiscipline;
