import About from './components/About';
import Category from './components/Category';
import Discount from './components/Discount';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NewArrivals from './components/NewArrivals';
import NewsLetter from './components/NewsLetter';
import Trick from './components/Trick';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Category />
      <About />
      <Trick />
      <Discount />
      <NewArrivals />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
