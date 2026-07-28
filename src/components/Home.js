import styled from 'styled-components';
import SliderImage from './SliderImage';
import Viewrs from './../components/Viewrs';
import Recomanded from './Recomanded';
import NewDisney from './NewDisney';
import Orignals from './Orignals';
import Trending from './Trending';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import db from '../Firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { setMovie } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    useEffect(() => {
        if (!userName) return;

        const unsubscribe = onSnapshot(collection(db, 'movies'), (snapshot) => {
            let recommanded = [];
            let newDisney = [];
            let orignals = [];
            let trending = [];

            snapshot.docs.forEach((doc) => {
                switch (doc.data().type) {
                    case 'recommend':
                        recommanded = [...recommanded, { id: doc.id, ...doc.data() }];
                        break;

                    case 'new':
                        newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                        break;

                    case 'original':
                        orignals = [...orignals, { id: doc.id, ...doc.data() }];
                        break;

                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data() }];
                        break;

                    default:
                        break;
                }
            });

            dispatch(setMovie({
                recommanded: recommanded,
                newDisney: newDisney,
                orignals: orignals,
                trending: trending,
            }));
        });

        return () => unsubscribe();
    }, [userName, dispatch]);

    return (
        <Container>
            <SliderImage />
            <Viewrs />
            <Recomanded />
            <NewDisney />
            <Orignals />
            <Trending />
        </Container>
    );
};

export default Home;

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 70px;
padding: 0 calc(3.5vh + 5px);

&::after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}
`;