import './circle-traits.styles.scss'
import BubbleChart from '@weknow/react-bubble-chart-d3';
import ErrorBoundary from './ErrorBoundary';
const bubbleClick = (label) =>{
  console.log("Custom bubble click func")
}
const legendClick = (label) =>{
  console.log("Customer legend click func")
}


const CircleTraits = () => {
    
    return (
        <div className='circle-traits-container'>
          <BubbleChart
            width={800}
            height={800}
            fontFamily="Arial"
            data={[
              { label: 'Trait 1', value: 1 },
              { label: 'API', value: 1 },
              { label: 'Data', value: 1 },
              { label: 'Commerce', value: 1 },
              { label: 'AI', value: 3 },
              { label: 'Management', value: 5 },
              { label: 'Testing', value: 6 },
              { label: 'Mobile', value: 9 },
              { label: 'Conversion', value: 9 },
            ]}
            />
      </div>
    )
}

export default CircleTraits