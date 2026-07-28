import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../Firebase';

const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const fetchMovie = async () => {
            try {
                const docRef = doc(db, 'movies', id);
                const docSnap = await getDoc(docRef);

                if (!isMounted) return;

                if (docSnap.exists()) {
                    setDetailData(docSnap.data());
                    setNotFound(false);
                } else {
                    console.log('no such document in firebase');
                    setNotFound(true);
                }
            } catch (err) {
                console.log('Error getting document: ', err);
                setNotFound(true);
            }
        };

        fetchMovie();

        return () => {
            isMounted = false;
        };
    }, [id]);

    if (notFound) {
        return (
            <Container>
                <SubTitle>Sorry, we couldn't find that title.</SubTitle>
            </Container>
        );
    }

    return (
        <Container>
          <BackGround>
              <img src={detailData.backgroundImg} alt={detailData.title || ''} />
          </BackGround>
          <ImagesTitel>
              <img src={detailData.titleImg} alt={detailData.title || ''} />
          </ImagesTitel>
            <ContentMeta>
                <Controll>
                   <Player>
                       <img src='/images/play-icon-black.png' alt='' />
                       <span> play </span>
                       </Player> 
                       <Trailer>
                           <img src='/images/play-icon-white.png' alt="" />
                            <span>trailer</span>
                       </Trailer>
                       <AddList>
                           <span/>
                           <span/>
                       </AddList>
                       <GroupWatch>
                           <img src='/images/group-icon.png' alt='' />
                       </GroupWatch>
                </Controll>
                    <SubTitle>
                        {detailData.subTitle}
                    </SubTitle>
                    <Description>
                        {detailData.description}
                    </Description>
            </ContentMeta>
        </Container>

    )

}
const Container = styled.div`
margin : 24px;
display:block;
position: relative;
top:72px;
overflow-x: hidden;
min-height: calc(100vh - 250px);
padding: 0 calc(3.5vw + 5px);
`;
const BackGround = styled.div`
    left: 0px;
    position: fixed;
    right:0px;
    top:0px;
    z-index: -1;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            180deg,
            rgba(10, 14, 23, 0.2) 0%,
            rgba(10, 14, 23, 0.9) 100%
        );
    }

    img{
        width: 100vw;
        height:100vh;
        object-fit: cover;
        @media (max-width:768px){
            width: initial;
        }
    }
`;
const ImagesTitel = styled.div`
       align-items: flex-end;
       display: flex;
       -webkit-box-pack: flex-start;
       justify-content: flex-start;
       margin: 70px auto;
       height:30vw;
       max-height: 170px;
       padding-bottom: 10px;
       width:100%;


img{
max-width:600px;
max-height:200px;
width: 100%;
filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.5));
}
`;

const ContentMeta = styled.div `
    max-width: 874px;

`;
const Controll = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin : 24px;
    min-height: 56px;
`;
const Player = styled.button`
    display: flex;
    align-items: center;
    margin: 0px 22px 0px 0px;
    justify-content:center;
    height:56px;
    font-size:15px;
    font-family: var(--font-body);
    font-weight: 600;
    cursor: pointer;
    border-radius: var(--radius-sm);
    padding:0px 24px;
    letter-spacing: 1.8px;
    border: none;
    text-align: center;
    text-transform: uppercase;
    background:rgb(249 , 249 , 249);
        color : rgb(0 , 0 , 0);
    transition: transform 200ms var(--ease-standard), background 200ms var(--ease-standard);
    img{
        width: 32px;
    }
    &:hover{
        background:rgb(198 , 198 , 198);
        transform: translateY(-2px);
    }
@media (max-width : 768px){
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img{
        width:25px;
    }
}

`;

const Trailer = styled(Player)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color : rgb(249 , 249, 249);

`;
const AddList = styled.div`
margin-right:16px;
height:44px;
width: 44px;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(0,0,0,0.6);
border-radius:50%;
border : 2px solid white;
cursor: pointer;
transition: background-color 200ms var(--ease-standard), transform 200ms var(--ease-standard);
span{
    background-color: rgb(249 , 249 , 249);
    display : inline-block;
   
    &:first-child{
        height: 2px;
        transform: translate(1px , 0px ) rotate( 0deg);
        width: 16px;
     }

     &:nth-child(2){
         height : 16px;
         transform: translateX(-8px ) rotate( 0deg);
         width: 2px;
     }
}
&:hover {
    background-color: rgba(0, 0, 0, 0.85);
    transform: translateY(-2px);
}
`;

const GroupWatch = styled(AddList)`

`;

const SubTitle = styled.div`
 color : rgba(249,249,249, 0.75);
    font-size:15px;
    font-weight: 500;
    letter-spacing: 0.4px;
    min-height:20px;
    @media (max-width: 768px){
        font-size:12px;
    }
`;
const Description = styled.div `
color : rgb(249,249,249);
    font-size:19px;
    max-width: 730px;
    line-height:1.5;
    padding:16px 0px;
    
    @media (max-width: 768px){
        font-size:14px;
    }
`;

export default Detail;