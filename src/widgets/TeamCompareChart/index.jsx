
import styled from 'styled-components';
import styles from './styles.module.scss';

// A stílusok átvezetése styled-components-be, ha szükséges
const StyledVs = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TeamCompareChart = () => {
  return (
    // Használjuk a StyledVs-t a styles.vs helyett
    <StyledVs className={styles.vs}>vs</StyledVs>
  );
};
