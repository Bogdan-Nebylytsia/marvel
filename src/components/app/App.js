import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";


const Page404 = lazy(() => import('../pages/Page404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SinglePage = lazy(() => import('../pages/SInglePage'));
const SingleCharLayout = lazy(() => import('../pages/singleCharLayout/SingleCharLayout'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'))

const MainContent = () => {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition key={location.key} classNames="fade-page" timeout={700} unmountOnExit>
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/char/:Id" element={<SinglePage identifier="char" Component={SingleCharLayout} />} />
          <Route path="/comics" element={<ComicsPage />}>
            <Route path=":Id" element={<SinglePage identifier="comic"  Component={SingleComicLayout}/>} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
};

const App = () => {

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <MainContent />
          </Suspense>
        </main>
      </div>
    </Router>

  )
}

export default App;
