import BubbleChart from '../bubble-chart/bubble-chart.component';
import './traits-identify.styles.scss'
const DATA = [
    { _id: "Label A", value: 25, backgroundColor: "green" },
    { _id: "Label B", value: 50 },
    { _id: "Label C", value: 15 },
    { _id: "Label D", value: 35 },
    { _id: "Label E", value: 50 },
    { _id: "Label F", value: 6 },
    { _id: "Label G", value: 7 },
    { _id: "Label H", value: 8 },
    { _id: "Label I", value: 9 },
    { _id: "Label J", value: 10 },
    { _id: "Label K", value: 20 },
    { _id: "Label L", value: 30 },
    { _id: "Label M", value: 60 },
    { _id: "Label N", value: 55 },
    { _id: "Label O", value: 6 },
    { _id: "Label P", value: 7 }
  ];

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
            {/* <BubbleChart data={DATA}/> */}
        </div>
    )
}

export default TraitsIdentify;