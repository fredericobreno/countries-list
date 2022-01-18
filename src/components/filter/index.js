import React from 'react';
import styles from './styles.module.css';
import useDebounce from '../../hooks/useDebounce';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/actions';

const Filter = () => {
    const dispatch = useDispatch();
    const { fetchCountries } = bindActionCreators(actionCreators, dispatch);
    const [value, setValue] = React.useState('');
    const debouncedValue = useDebounce(value, 800);

    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    React.useEffect(() => {
        fetchCountries({ name: value });
    }, [debouncedValue])

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                onChange={handleOnChange}
                placeholder='search country...'
                value={value}
            />
        </div>
    )
}

export default Filter;
