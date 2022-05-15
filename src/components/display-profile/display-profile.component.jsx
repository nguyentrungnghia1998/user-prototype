import NumberGenes from '../number-genes/number-genes.component'
import './display-profile.styles.scss'
const DisplayProfile = ({profile}) => {
    const {name,typeofprofile,gens,variants,gens_had,variants_had} = profile
    return (
        <div className='profile-container'> 
            <h1 className='Hi-name'>
                Hi {name},
            </h1>
            <h2 className={`profile-type ${typeofprofile}`} >
                {typeofprofile} profile
            </h2>
            <p className='paragraph'>
            To find out your genetic type, we scanned <strong>{gens} genes</strong> and <strong>{variants} variants</strong>. 
            However, your reports have only covered 
            </p>
            <NumberGenes variants_had={variants_had} gens_had={gens_had} />
            <p className='pragraph'>
            <strong>{gens-gens_had} genes</strong> and <strong>{variants-variants_had} variants</strong> more are available for you 
            to discover the misteries of your genome. For details about all packages we offer, <strong>click here.</strong>
            </p>
            <div className="Achievements-container">
            <div className="row">
                <div className="col">
                    Achievements
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-warning">more</button>
                </div>
            </div>   
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-circle">coming soon</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DisplayProfile;