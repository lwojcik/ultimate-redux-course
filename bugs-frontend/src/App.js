
import { Provider } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import Bugs from './components/Bugs';
// import BugsList from './components/BugsList';
import configureStore from './store/configureStore';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
    </Provider>
  );
}

export default App;
