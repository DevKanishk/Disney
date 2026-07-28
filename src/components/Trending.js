import { useSelector } from 'react-redux';
import { selectTrending } from '../features/movie/movieSlice';
import MovieRow from './MovieRow';

const Trending = () => {
    const movies = useSelector(selectTrending);
    return <MovieRow title="Trending" movies={movies} />;
};

export default Trending;
