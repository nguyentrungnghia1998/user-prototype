import './genetic-type.styles.scss'
import PeopleLogo from '../../assets/client.svg'

const GeneticType = ({profile}) => {
    const {age} = profile;
    return (
        <div className = "genetic-type-container ">
            <div className='age'>
                {age}
            </div>
            <div className='logo'>
                <img src={PeopleLogo} alt="Logo"/>
            </div>
            <div className='genetic-type'>
                Genetic Type
            </div>
        </div>
    )
}

export default GeneticType