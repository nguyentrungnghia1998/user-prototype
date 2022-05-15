import DisplayProfile from '../display-profile/display-profile.component'
import GeneticType from '../genetic-type/genetic-type.component'
import './general-info.styles.scss'
const profile = {
    name: 'Nghia',
    age: 24,
    typeofprofile: 'Premium',
    gens: 1000,
    variants: 100000,
    gens_had: 600,
    variants_had: 70000,
}
const GeneralInfo = () => {
    return (
        <div className='general-info-container'>
            <GeneticType profile={profile} />
            <DisplayProfile profile={profile} />
        </div>
    )
}

export default GeneralInfo