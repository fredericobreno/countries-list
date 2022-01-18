import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import InfoText from '../info-text';

const CountryCard = (props) => {
    const { country, flag, region, capital, population } = props;
    const [showInfo, setShowInfo] = React.useState(false);

    const handleClick = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            {showInfo ? (
                <div className={styles.infoWrapper}>
                    <InfoText prop="region" value={region} />
                    {capital && <InfoText prop="capital" value={capital} />}
                    <InfoText prop="population" value={population.toString()} />
                </div>
            ) : (
                <>
                    <span className={styles.flag}>{flag}</span>
                    <span className={styles.countryName}>{country}</span>
                </>
            )}
        </div>
    );
}

CountryCard.propTypes = {
    country: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    capital: PropTypes.string,
    population: PropTypes.number.isRequired,
}

export default CountryCard;
