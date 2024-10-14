import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MovieDetail } from './pages/MovieDetail';
import { MovieList } from './pages/MovieList';
import { PageNotFound } from './pages/PageNotFound';
import { Search } from './pages/Search';



function App() {
  return (
    <div className="App">

      <Header />
      <div className='bg-slate-50 dark:bg-slate-800'>
        <Routes>
           <Route path='/' element={<MovieList apiPath="movie/now_playing" title="Home" />} />
           <Route path='movie/:id' element={<MovieDetail />} />
           <Route path='movies/popular' element={<MovieList apiPath="movie/popular" title="popular" />} />
           <Route path='movies/top' element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
           <Route path='movies/upcoming' element={<MovieList apiPath="movie/upcoming" title="UpComing" />} />
           <Route path='search' element={<Search apiPath="search/movie" />} />
           <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
