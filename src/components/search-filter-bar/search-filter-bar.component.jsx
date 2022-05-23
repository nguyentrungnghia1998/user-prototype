import './search-filter-bar.styles.scss'
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
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
                <div className='col' key='col1'>
                    <div className='sort-field'>
                        <FilterListIcon/>
                        <span> sort </span>
                    </div>
                    <div className='filter-field'>
                        <FilterAltOutlinedIcon/>
                        <span> filter </span> 
                    </div>
                </div>
                <div className='col' key='col2'>
                    <div className='search-field-container'>
                        <SearchIcon id='icon'/>
                        <input className='search-field' 
                        type='search'
                        placeholder='Enter a trait name ...'
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SearchFilterBar