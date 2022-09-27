import './App.css';
import Row from './components/Row';
import requests from './req';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="app">

      <Navbar/>

      <Banner />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} />
      <Row title="NETFLIX ORIGINLS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
      
      
    </div>
  );
}

export default App;
