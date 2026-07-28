import { useSelector } from 'react-redux';
import { selectNewDisney } from '../features/movie/movieSlice';
import MovieRow from './MovieRow';

const NewDisney = () => {
    const movies = useSelector(selectNewDisney);
    return <MovieRow title="New on Disney+" movies={movies} />;
};

export default NewDisney;
