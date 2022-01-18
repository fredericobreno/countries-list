import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const InfoText = (props) => {
    const { prop, value } = props;

    return (
        <div className={styles.wrapper}>
            <span className={styles.prop}>{prop}:</span>&nbsp;
            <span className={styles.value}>{value}</span>
        </div>
    );
}

InfoText.propTypes = {
    prop: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default InfoText;
