import './Styles.css'
export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            placeholder='type your search'
            className='text-input'
            onChange={handleChange}
            value={searchValue}
            type="search"
        />
    );
}