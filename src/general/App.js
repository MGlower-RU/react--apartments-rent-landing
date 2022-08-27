import ExplorerFeatures from '../ExplorerFeatures/ExplorerFeatures';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';
import Furniture from '../Furniture/Furniture';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Membership from '../Membership/Membership';
import Reviews from '../Reviews/Reviews';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Membership />
      <ExplorerFeatures />
      <Furniture />
      <Reviews />
      <Favorites />
      <Footer />
    </div>
  );
}