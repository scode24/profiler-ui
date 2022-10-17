import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import useScreenType from 'react-screentype-hook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import WorkingExp from './components/WorkingExp';

function App() {

  const screenType = useScreenType();
  const [cardState, setCardState] = useState({
    isTitleOpen: true,
    isMenuOpen: false,
    isInfoOpen: false
  });

  useEffect(() => {
    if (screenType.isTablet) {
      setCardState({
        isTitleOpen: false,
        isMenuOpen: true,
        isInfoOpen: true
      })
    }
  }, [screenType.isTablet])

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
            <Route path='about' element={<About />} />
            <Route path='skills' element={<Skills />} />
            <Route path='workingExp' element={<WorkingExp />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
