import ExplorerFeatures from '../ExplorerFeatures/ExplorerFeatures';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Membership from '../Membership/Membership';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Membership />
      <ExplorerFeatures />
      <Footer />
    </div>
  );
}