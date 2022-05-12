import './display-profile.styles.scss'
const profile = {
    name: 'Trang',
    typeofprofile: 'Standard',
    gens: 1000,
    variants: 100000,
    gens_had: 400,
    variants_had: 45678,
}
const DisplayProfile = () => {
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
            <p className='pragraph'>
            <strong>{gens-gens_had} genes</strong> and <strong>{variants-variants_had} variants</strong> more are available for you 
            to discover the misteries of your genome. For details about all packages we offer, click here.
            </p>
        </div>
    )
}

export default DisplayProfile;