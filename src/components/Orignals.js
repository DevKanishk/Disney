import { useSelector } from 'react-redux';
import { selectOrignals } from '../features/movie/movieSlice';
import MovieRow from './MovieRow';

const Orignals = () => {
    const movies = useSelector(selectOrignals);
    return <MovieRow title="Originals" movies={movies} />;
};

export default Orignals;
