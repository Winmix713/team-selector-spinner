
// styling
import styled from 'styled-components';

// components
import Spring from '@components/Spring';
import PlayerInfo from '@components/PlayerInfo';

// hooks
import { useThemeProvider } from '@contexts/themeContext';

// assets
import BarSvg from '@assets/bar.svg';

const StyledFooter = styled.div`
    padding: 28px 30px;
`;

const CardWrapper = styled.div``;

const Card = styled.span`
    display: block;
    width: 12px;
    height: 17px;
    border-radius: 2px;

    &.red {
        background: #E0162E;
        border: 2px solid #910C0C;
    }

    &.yellow {
        background: #F9C700;
        border: 2px solid #A37F00;
        position: relative;

        &.ltr:not(:first-child) {
            margin-left: -6px;
        }

        &.rtl:not(:first-child) {
            margin-right: -6px;
        }
    }
`;

const PlayerDiscipline = () => {
    const { direction } = useThemeProvider();
    
    return (
        <Spring className="card h-1 d-flex flex-column justify-content-between">
            <PlayerInfo wrapperClass="card-padded"
                        title="Romelu Lukaku"
                        subtitle="Discipline record"
                        number={4}/>
            <StyledFooter className="card_footer border-top d-flex flex-column g-16">
                <div className="d-flex align-items-center justify-content-between">
                    <h3>3</h3>
                    <CardWrapper className="d-flex" style={{ transform: 'scaleX(-1)' }}>
                        <Card className={`yellow ${direction}`}/>
                        <Card className={`yellow ${direction}`}/>
                        <Card className={`yellow ${direction}`}/>
                    </CardWrapper>
                </div>
                <img src={BarSvg} alt="Bar" style={{ color: 'var(--accent)' }}/>
                <div className="d-flex align-items-center justify-content-between">
                    <h3>1</h3>
                    <CardWrapper className="d-flex" style={{ transform: 'scaleX(-1)' }}>
                        <Card className="red"/>
                    </CardWrapper>
                </div>
            </StyledFooter>
        </Spring>
    );
};

export default PlayerDiscipline;
