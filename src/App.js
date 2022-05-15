import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/scss/bootstrap.scss"
import GeneralInfo from './components/general-info/general-info.component';

const database = {
  name: 'Nghia',
  age: 24,
}

const App = () => {
  return (
    <GeneralInfo/>
  )
}

export default App;
