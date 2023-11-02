
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';

function App() {
  return (
    <>
      <h1>EPIBOOKS</h1>
      <MyNav />
      <Welcome></Welcome>
      <AllTheBooks/>
      <MyFooter />
      
      
      </>
    );
}

export default App;

