import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../country-card';
import styles from './styles.module.css';

const CountriesList = () => {
    const countries = useSelector(state => state.country);

    if (countries.loading) {
        return <p>loading...</p>
    }

    return (
        <div className={styles.wrapper}>
            {countries.result
                .sort((a, b) => a.name.common > b.name.common ? 1 : -1)
                .map(country => (
                    <CountryCard
                        key={country.name.common}
                        country={country.name.common}
                        flag={country.flag}
                        region={country.region}
                        capital={country.capital && country.capital[0]}
                        population={country.population}
                    />
                ))
            }
        </div>
    )
}

export default CountriesList;
