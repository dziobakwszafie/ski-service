import React, { useRef } from 'react';
import MainHeader from './components/MainHeader';
import Content from './components/Content';
import Intro from './components/Intro';
import Footer from '../../components/Footer';

const MainPage = () => {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const el1 = useRef();
  const el2 = useRef();
  return (
    <>
      <MainHeader reference={el1} click={() => scrollToDiv(el2)} />
      <Intro reference={el2} />
      <Content />
      <Footer />
    </>
  );
};

export default MainPage;
