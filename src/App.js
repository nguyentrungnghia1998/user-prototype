import logo from './logo.svg';
import './App.css';
import DisplayProfile from './route/display-profile.component';
import "../node_modules/bootstrap/scss/bootstrap.scss"

const database = {
  name: 'Nghia',
  age: 24,
}

const App = () => {
  return (
    <DisplayProfile />
  )
}

export default App;
