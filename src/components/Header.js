import styled from 'styled-components';
import { useEffect, useCallback, useState } from 'react';
import { auth, provider } from '../Firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const [scrolled, setScrolled] = useState(false);

    const setUser = useCallback((user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    }, [dispatch]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // Only redirect away from the login page itself.
                // Without this check, refreshing /home or /detail/:id while
                // logged in would bounce the user back to /home every time.
                if (history.location.pathname === '/') {
                    history.push('/home');
                }
            }
        });
        return () => unsubscribe();
    }, [history, setUser]);

    // Give the header a solid, blurred background once the page is
    // scrolled, so nav text stays legible over any hero/background image.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handelAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider).then(result => {
                setUser(result.user);
            }).catch(err => {
                alert(err.message);
            });
        } else if (userName) {
            signOut(auth).then(() => {
                dispatch(setSignOutState());
                history.push("/");
            }).catch(err => alert(err.message));
        }
    }

    return (
        <Nav $scrolled={scrolled}>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            {!userName ? (<Login onClick={handelAuth}>Login</Login>) : (<>
                <Menuitem>
                    <Link to="/home">
                        <img src="/images/home-icon.svg" alt="HOME" />
                        <span>HOME</span>
                    </Link>
                    <Link to="/home">
                        <img src="/images/search-icon.svg" alt="SEARCH" />
                        <span>SEARCH</span>
                    </Link>
                    <Link to="/home">
                        <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                        <span>WATCHLIST</span>
                    </Link>
                    <Link to="/home">
                        <img src="/images/original-icon.svg" alt="ORIGINALS" />
                        <span>ORIGINALS</span>
                    </Link>
                    <Link to="/home">
                        <img src="/images/movie-icon.svg" alt="MOVIES" />
                        <span>MOVIES</span>
                    </Link>
                    <Link to="/home">
                        <img src="/images/series-icon.svg" alt="SERIES" />
                        <span>SERIES</span>
                    </Link>
                </Menuitem>

                <SignOut>
                    <UserImage src={userPhoto} alt={userName} />
                    <DropDown>
                        <SignOutButton type="button" onClick={handelAuth}>Sign Out</SignOutButton>
                    </DropDown>
                </SignOut>
            </>)}
        </Nav>
    );
}
export default Header;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spacing: 15px;
    height: 70px;
    z-index: 999;
    background-color: ${({ $scrolled }) => ($scrolled ? '#090b13' : 'rgba(9, 11, 19, 0.35)')};
    backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'none' : 'blur(6px)')};
    box-shadow: ${({ $scrolled }) => ($scrolled ? '0 4px 20px rgba(0, 0, 0, 0.35)' : 'none')};
    transition: background-color 250ms var(--ease-standard, ease), box-shadow 250ms var(--ease-standard, ease);
`;

const Logo = styled.a`
    padding: 0;
    display: inline-block;
    max-width: 70px;
    width: 80px;
    transition: transform 200ms var(--ease-standard, ease);
    img {
        width: 100%;
        display: flex;
    }
    &:hover {
        transform: scale(1.04);
    }
`;

const Menuitem = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-left: 25px;
    margin-right: auto;

    a {
        margin-left: 12px;
        display: flex;
        align-items: center;
        padding: 0.12px;

        img {
            align-items: center;
            width: 20px;
            min-width: 20px;
            height: 20px;
            z-index: auto;
        }
        span {
            align-items: center;
            font-size: 13px;
            letter-spacing: 1.45px;
            line-height: 1.08;
            margin-left: 3px;
            padding: 2px 0px;
            position: relative;
        }
        span:before {
            background-color: rgb(249, 249, 249);
            display: block;
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: '';
            left: 0px;
            opacity: 1;
            position: absolute;
            right: 0px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            width: 0;
            height: 2px;
        }
        &:hover {
            span:before {
                width: 100%;
            }
        }
    }

    @media (max-width: 788px) {
        display: none;
    }
`;

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    letter-spacing: 1.4px;
    border: 0.5px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`;

const UserImage = styled.img`
    height: 100%;
    border-radius: 50px;
    border: 2px solid transparent;
    transition: border-color 200ms var(--ease-standard, ease);
`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    width: 140px;
    border-radius: var(--radius-sm, 6px);
    overflow: hidden;
    background: rgb(19, 19, 19);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transform: translateY(-6px);
    pointer-events: none;
    transition: opacity 200ms var(--ease-standard, ease), transform 200ms var(--ease-standard, ease);
`;

const SignOutButton = styled.button`
    width: 100%;
    border: none;
    background: transparent;
    color: #f9f9f9;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 12px 0;
    cursor: pointer;
    font-family: inherit;

    &:hover {
        background: rgba(249, 249, 249, 0.08);
    }
`;

const SignOut = styled.div`
    position: relative;
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    ${UserImage} {
        width: 100%;
        height: 100%;
    }
    &:hover, &:focus-within {
        ${UserImage} {
            border-color: rgba(249, 249, 249, 0.6);
        }
        ${DropDown} {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
    }
`;