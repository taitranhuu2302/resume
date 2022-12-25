import './App.scss';
import 'animate.css/animate.min.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import { useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Portfolio from './components/Portfolio';

const App = () => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const {ref: refHomeView, inView: homeView} = useInView();
  const {ref: refAboutView, inView: aboutView} = useInView();
  const {ref: refSkillView, inView: skillView} = useInView();
  const {ref: refContactView, inView: contactView} = useInView();
  const {ref: refPortfolioView, inView: portfolioView} = useInView();
  
  const scrollTo = (type: NavigationType) => {
    switch (type) {
      case 'Home':
        homeRef.current?.scrollIntoView();
        break;
      case 'About':
        aboutRef.current?.scrollIntoView();
        break;
      case 'LanguageTools':
        skillRef.current?.scrollIntoView();
        break;
      case 'Contact':
        contactRef.current?.scrollIntoView();
        break;
      case 'Portfolio':
        portfolioRef.current?.scrollIntoView();
        break;
      default:
        break;
    }
  };
  
  const activeTab = useMemo((): NavigationType => {
    if (homeView) return 'Home';
    if (aboutView) return 'About';
    if (skillView) return 'LanguageTools';
    if (contactView) return 'Contact';
    if (portfolioView) return 'Portfolio';
    return 'Home';
  }, [aboutView, contactView, homeView, portfolioView, skillView]);
  
  return (
    <div id="App">
      <Navbar activeTab={activeTab} scrollTo={scrollTo}/>
      <Home ref={(c) => {
        homeRef.current = c;
        refHomeView(c);
      }}/>
      <About ref={(c) => {
        aboutRef.current = c;
        refAboutView(c);
      }}/>
      <Skill ref={(c) => {
        skillRef.current = c;
        refSkillView(c);
      }}/>
      <Portfolio ref={(c) => {
        portfolioRef.current = c;
        refPortfolioView(c);
      }}/>
      <Contact ref={(c) => {
        contactRef.current = c;
        refContactView(c);
      }}/>
      <Footer/>
    </div>
  );
};

export default App;
