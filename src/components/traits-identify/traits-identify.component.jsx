import './traits-identify.styles.scss'

const TraitsIdentify = () => {
    return (
        <div className='trait-identify-container'>
            <div className='tag-title'>
                Which traits identify your genetic type?
            </div>
            <div className='row justify-content-between'>
                <div className='col-1'>
                    Traits push you into the group
                </div>
                <div className='col-1'>
                    Traits push you out of the group
                </div>
            </div>
        </div>
    )
}

export default TraitsIdentify;