import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { SidebarProvider } from '@contexts/sidebarContext';
import { ThemeProvider } from 'styled-components';
import { useThemeProvider } from '@contexts/themeContext';
import { useWindowSize } from 'react-use';
import useAuthRoute from '@hooks/useAuthRoute';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import LoadingScreen from '@components/LoadingScreen';
import ShoppingCart from '@widgets/ShoppingCart';
import ScrollToTop from '@components/ScrollToTop';
import ThemeStyles from '@styles/theme';
import ReactGA from 'react-ga4';
import './style.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-grid-layout/css/styles.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '@fonts/icomoon/icomoon.woff';

const ClubSummary = lazy(() => import('@pages/ClubSummary'));
const GameSummary = lazy(() => import('@pages/GameSummary'));
const Championships = lazy(() => import('@pages/Championships'));
const LeagueOverview = lazy(() => import('@pages/LeagueOverview'));
const FansCommunity = lazy(() => import('@pages/FansCommunity'));
const Statistics = lazy(() => import('@pages/Statistics'));
const PageNotFound = lazy(() => import('@pages/PageNotFound'));
const MatchSummary = lazy(() => import('@pages/MatchSummary'));
const MatchOverview = lazy(() => import('@pages/MatchOverview'));
const PlayerProfile = lazy(() => import('@pages/PlayerProfile'));
const Schedule = lazy(() => import('@pages/Schedule'));
const Tickets = lazy(() => import('@pages/Tickets'));
const FootballStore = lazy(() => import('@pages/FootballStore'));
const BrandStore = lazy(() => import('@pages/BrandStore'));
const Product = lazy(() => import('@pages/Product'));
const Login = lazy(() => import('@pages/Login'));
const SignUp = lazy(() => import('@pages/SignUp'));
const Settings = lazy(() => import('@pages/Settings'));
const HomeScreen = lazy(() => import('@pages/homepage'));
const RegisterScreen = lazy(() => import('@pages/registration'));
const ConfirmScreen = lazy(() => import('@pages/confirmation/ConfirmationScreen'));
const VerificationScreen = lazy(() => import('@pages/verification')); // This should be imported only once

const App = () => {
    const appRef = useRef(null);
    const { theme, direction } = useThemeProvider();
    const { width } = useWindowSize();
    const isAuthRoute = useAuthRoute();

    // Google Analytics init
    const gaKey = process.env.REACT_APP_PUBLIC_GA;
    gaKey && ReactGA.initialize(gaKey);

    // auto RTL support for Material-UI components and styled-components
    const plugins = direction === 'rtl' ? [rtlPlugin] : [];

    const muiTheme = createTheme({
        direction: direction,
    });

    const cacheRtl = createCache({
        key: 'css-rtl',
        stylisPlugins: plugins,
    });

    useEffect(() => {
        // scroll to top on route change
        appRef.current && appRef.current.scrollTo(0, 0);
    }, []);

    return (
        <CacheProvider value={cacheRtl}>
            <MuiThemeProvider theme={muiTheme}>
                <div className="app_container">
                    <div className="app_container-content d-flex flex-column flex-1">
                        <Suspense fallback={<LoadingScreen/>}>
                            <Routes>
                                <Route path="*" element={<PageNotFound/>}/>
                                <Route path="/" element={<HomeScreen/>}/>
                                <Route path="/registerscreen" element={<RegisterScreen/>}/>
                                <Route path="/thankyou" element={<ConfirmScreen/>}/>
                                <Route path="/team/upload/:id" element={<VerificationScreen/>}/>
                                <Route path="/game-summary" element={<GameSummary/>}/>
                                <Route path="/championships" element={<Championships/>}/>
                                <Route path="/league-overview" element={<LeagueOverview/>}/>
                                <Route path="/fans-community" element={<FansCommunity/>}/>
                                <Route path="/statistics" element={<Statistics/>}/>
                                <Route path="/match-summary" element={<MatchSummary/>}/>
                                <Route path="/match-overview" element={<MatchOverview/>}/>
                                <Route path="/player-profile" element={<PlayerProfile/>}/>
                                <Route path="/schedule" element={<Schedule/>}/>
                                <Route path="/tickets" element={<Tickets/>}/>
                                <Route path="/football-store" element={<FootballStore/>}/>
                                <Route path="/brand-store" element={<BrandStore/>}/>
                                <Route path="/product" element={<Product/>}/>
                                <Route path="/login" element={<Login/>}/>
                                <Route path="/sign-up" element={<SignUp/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </MuiThemeProvider>
        </CacheProvider>
    );
}

export default App;
