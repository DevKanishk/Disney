import { useSelector } from 'react-redux';
import { selectRecommanded } from '../features/movie/movieSlice';
import MovieRow from './MovieRow';

const Recomanded = () => {
    const movies = useSelector(selectRecommanded);
    return <MovieRow title="Recommended for you" movies={movies} />;
};

export default Recomanded;
