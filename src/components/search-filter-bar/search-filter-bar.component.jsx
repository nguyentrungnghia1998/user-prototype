import './search-filter-bar.styles.scss'
import FilterSymbol from '../../assets/Filter.svg'
import SortSymbol from '../../assets/Sort.svg'
import SearchIcon from '@mui/icons-material/Search';

const SearchFilterBar = () => {
    return (
        <div className='search-filter-bar-container'>
            {/* <div className='sort-field'>
                <img src={SortSymbol} alt='Filter'/>
                <span>sort</span>
            </div>
            <div className='filter-field'>
                <img src={FilterSymbol} alt='Sort'/>
                <span>filter</span>
            </div>
            <div className='search-field-container'>
            <input className='search-field' 
            type='search'
            placeholder='Enter a trait name ...'
            />
            </div> */}
            <div className='row justify-content-between'>
                <div className='col'>
                    <div className='sort-and-filter'>
                        <div className='sort-field'>
                            <img src={SortSymbol} alt='Filter'/>
                            <span>sort</span>
                        </div>
                        <div className='filter-field'>
                            <img src={FilterSymbol} alt='Sort'/>
                            <span>filter</span>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='search-field-container'>
                        <input className='search-field' 
                        type='search'
                        placeholder='Enter a trait name ...'
                        />
                        <SearchIcon/>
                    </div>
                </div>
            </div>
   
        </div>
    )
}

export default SearchFilterBar