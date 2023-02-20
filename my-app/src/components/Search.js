import PropTypes from 'prop-types'
import './search.scss';

function Search ({search, setSearch, fetchWeather}){
    return(
        <div className='searchBar'>
           <form onSubmit={(event)=> {
            fetchWeather();
            event.preventDefault();
           }}>  
                <label className="search">Entre ton code postal: </label>
                <input className='input'
                    placeholder='et appuie sur entrée'
                    value={search}
                    onChange={(event) => {
                    setSearch(event.target.value);
                    }}
                /> 
            </form>           
        </div>
    );
}

Search.propTypes= {
    search: PropTypes.number.isRequired,
    setSearch: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func.isRequired,
};

export default Search;