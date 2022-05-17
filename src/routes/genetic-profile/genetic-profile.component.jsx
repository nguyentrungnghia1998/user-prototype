import { getActiveElement } from '@testing-library/user-event/dist/utils'
import GeneralInfo from '../../components/general-info/general-info.component'
import SearchFilterBar from '../../components/search-filter-bar/search-filter-bar.component'
import TraitsIdentify from '../../components/traits-identify/traits-identify.component'
import './genetic-profile.styles.scss'
const GeneticProfile = () => {
    return (
        <div className='genetic-profile-container'>
            <GeneralInfo />
            <TraitsIdentify />
            <SearchFilterBar />
        </div>
        
    )
}

export default GeneticProfile