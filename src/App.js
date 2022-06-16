
import './App.css';
import NavBar from './components/navBar/NavBar'
import Header from './components/header/Header'
import Companies from './components/companies/Companies'
import Auctions from './components/auctions/Auctions'
import Process from './components/process/Process'
import Collections from './components/collections/Collections'
import Categories from './components/categories/Categories'
import Creators from './components/creators/Creators'
import Subscribe from './components/subscribe/Subscribe'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Companies />
      <Auctions />
      <Process />
      <Collections />
      <Categories />
      <Creators />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
