import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/scss/bootstrap.scss"
// import GeneralInfo from './components/general-info/general-info.component';
import GeneticProfile from './routes/genetic-profile/genetic-profile.component';
import CircleTraits from './components/circle-traits/circle-traits.component';

const database = {
  name: 'Nghia',
  age: 24,
}

const App = () => {
  return (
    // <GeneticProfile/>
        <GeneticProfile/>
  )
}

export default App;
