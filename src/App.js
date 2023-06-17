import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome'
import NavBar from './components/NavBar';
import { Button, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import HeaderComponent from './components/headerNav';
import ImageSlider from './components/ImageSlider';

function App(props) {
  return (
<>
<HeaderComponent/>

<NavBar/>

<ImageSlider/>
<Button>
  Hello
</Button>
</>
  );
}

export default App;
