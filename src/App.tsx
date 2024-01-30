import { Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense} from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {

    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Сайте</Link>
            <Suspense fallback={'Loading'}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>} />
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;