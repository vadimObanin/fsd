import {Counter} from "./components/Counter";
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense} from "react";

export const App = () => {
  return (
    <>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
      <h1 className={'app'}>App Component</h1>
      <Counter/>
    </>
  )
}