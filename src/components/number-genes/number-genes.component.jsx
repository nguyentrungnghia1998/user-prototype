import './number-genes.styles.scss'

const NumberGenes = ({gens_had,variants_had}) => {
    return (
        // <div className='number-genes-container'>
        //     <div className='genes-box'>
        //         {gens_had} gens
        //     </div>
        //     <div className='variants-box'>
        //         {variants_had} variants
        //     </div>
        // </div>
        
    <div className='number-genes-container'>
        {/* <p class="text-right">tyvjhfvyguyv.</p> */}

        <div className="row">
            <div className="col">
                <p className="value">{gens_had}</p>
                <p className="detail">genes</p>
        </div>
        <div className="vr"></div>
            <div className="col">
                <p className="value">{variants_had}</p>
                <p className="detail">variants</p>
            </div>
        </div>
    </div>
    )
}

export default NumberGenes