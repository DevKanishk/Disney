import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Shared row of movie cards. Used by Trending, NewDisney, Orignals, and
// Recomanded so the grid/card styling and rendering logic only live in
// one place — a typo or style tweak here now fixes all four rows at once.
const SKELETON_COUNT = 4;

const MovieRow = ({ title, movies }) => {
    const isLoading = movies === null || movies === undefined;

    return (
        <Container>
            <Title>{title}</Title>
            <Content>
                {isLoading && Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                    <SkeletonWrap key={`skeleton-${i}`} />
                ))}
                {!isLoading && movies.length === 0 && (
                    <EmptyState>Nothing here yet — check back soon.</EmptyState>
                )}
                {!isLoading && movies.map((movie) => (
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                            <img src={movie.cardImg} alt={movie.title} loading="lazy" />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    );
};

const Container = styled.div`
    padding: 25px;
`;

const Title = styled.h3`
    font-family: var(--font-display, inherit);
    font-size: 20px;
    margin: 0 0 4px;
    letter-spacing: 0.2px;
`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 12px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const EmptyState = styled.p`
    grid-column: 1 / -1;
    color: var(--color-text-muted, rgba(249, 249, 249, 0.6));
    font-size: 14px;
    padding: 20px 0;
`;

const cardShape = `
    padding-top: 56%;
    border-radius: var(--radius-md, 10px);
    overflow: hidden;
    position: relative;
`;

const Wrap = styled.div`
    ${cardShape}
    box-shadow: var(--shadow-card, rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px);
    border: 3px solid rgb(249, 249, 249, 0.1);
    cursor: pointer;
    transition: transform 250ms var(--ease-standard, ease), box-shadow 250ms var(--ease-standard, ease),
        border-color 250ms var(--ease-standard, ease);

    img {
        inset: 0px;
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: 1;
        transition: transform 400ms var(--ease-standard, ease);
        position: absolute;
        top: 0;
        z-index: 1;
    }

    &:hover {
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        transform: scale(1.05);

        img {
            transform: scale(1.06);
        }
    }
`;

// Shimmering placeholder shown while Firestore data is still loading,
// so a slow connection shows movement instead of a blank gap.
const SkeletonWrap = styled.div`
    ${cardShape}
    background: linear-gradient(
        100deg,
        var(--color-surface, #141721) 30%,
        rgba(249, 249, 249, 0.08) 50%,
        var(--color-surface, #141721) 70%
    );
    background-size: 200% 100%;
    animation: shimmer 1.4s ease-in-out infinite;

    @keyframes shimmer {
        0% { background-position: 150% 0; }
        100% { background-position: -50% 0; }
    }
`;

export default MovieRow;
