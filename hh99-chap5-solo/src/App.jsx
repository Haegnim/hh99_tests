import './App.css';
import { Router } from './shared/Router';
import Display from './layout/display';
import Header from './layout/Header';
function App() {
    return (
        <Display>
            <Header></Header>
            <Router />
        </Display>
    );
}

export default App;
