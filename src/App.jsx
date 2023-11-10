import { Outlet } from 'react-router-dom';
import HeaderLinks from './components/HeaderLinks';


function App() {
    return (
        <>
            <HeaderLinks />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;