import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import useScreenType from 'react-screentype-hook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import WorkingExp from './components/WorkingExp';
import Qualification from './components/Qualification';
import Achievements from './components/Achievements';
import * as service from './services';

function App() {

  const screenType = useScreenType();
  const [cardState, setCardState] = useState({
    isTitleOpen: true,
    isMenuOpen: false,
    isInfoOpen: false
  });

  const [menuList, setMenuList] = useState();

  useEffect(() => {

    let url = window.location.href;
    url = url.replace('http://', '');
    url = url.replace('https://', '');
    const email = url.split('/')[1];

    if (screenType.isTablet) {
      setCardState({
        isTitleOpen: false,
        isMenuOpen: true,
        isInfoOpen: true
      })
    }

    service.getMenuList(email)
      .then(response => {
        setMenuList(response);
      })


  }, [screenType.isTablet])

  const getNavOption = (page) => {
    if (menuList !== undefined) {

      let pageIndex = 0;
      for (let index = 0; index < menuList.length; index++) {
        if (menuList[index].title === page) {
          pageIndex = index;
          break;
        }
      }

      if (pageIndex === 0) {
        return {
          'previous': null,
          'next': menuList[pageIndex + 1].title,
        }
      } else if (pageIndex === menuList.length - 1) {
        return {
          'previous': menuList[pageIndex - 1].title,
          'next': null
        }
      }
      return {
        'previous': menuList[pageIndex - 1].title,
        'next': menuList[pageIndex + 1].title,
      }
    }
  }

  const toggleCard = (cardName) => {

    if (screenType.isTablet) {
      setCardState({
        isTitleOpen: !cardState.isTitleOpen,
        isMenuOpen: !cardState.isMenuOpen,
        isInfoOpen: !cardState.isInfoOpen
      })
    } else {
      switch (cardName) {
        case 'title':
          setCardState({
            isTitleOpen: !cardState.isTitleOpen,
            isMenuOpen: false,
            isInfoOpen: false
          });
          break;
        case 'menu':
          setCardState({
            isTitleOpen: false,
            isMenuOpen: !cardState.isMenuOpen,
            isInfoOpen: false
          });
          break;
        case 'info':
          setCardState({
            isTitleOpen: false,
            isMenuOpen: false,
            isInfoOpen: !cardState.isInfoOpen
          });
          break;
        default:
          console.log('Option not identified');
          break;
      }
    }
  }

  return (
    <div>
      <Header toggleCard={toggleCard} />

      <BrowserRouter>
        <Routes>
          <Route path='/:email' element={<Main state={cardState} />}>
            <Route path='about' element={<About nav={getNavOption} />} />
            <Route path='skills' element={<Skills nav={getNavOption} />} />
            <Route path='qualification' element={<Qualification nav={getNavOption} />} />
            <Route path='workingExp' element={<WorkingExp nav={getNavOption} />} />
            <Route path='achievements' element={<Achievements nav={getNavOption} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
