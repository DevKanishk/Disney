(this["webpackJsonpdisney-clone"]=this["webpackJsonpdisney-clone"]||[]).push([[0],{48:function(e,t,i){},72:function(e,t,i){},73:function(e,t,i){"use strict";i.r(t);var a=i(1),r=i.n(a),s=i(28),n=i.n(s),o=(i(48),i(15)),c=i(7),d=i(3),l=(i(49),i(50),i(37)),p=i.n(l),x=i(2);var b=e=>Object(x.jsxs)(g,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,children:[Object(x.jsx)(m,{children:Object(x.jsx)("img",{src:"/images/slider-badag.jpg",alt:""})}),Object(x.jsx)(m,{children:Object(x.jsx)("img",{src:"/images/slider-badging.jpg",alt:""})}),Object(x.jsx)(m,{children:Object(x.jsx)("img",{src:"/images/slider-scale.jpg",alt:""})}),Object(x.jsx)(m,{children:Object(x.jsx)("img",{src:"/images/slider-scales.jpg",alt:""})})]});const g=Object(d.a)(p.a)`
&>button{
    opacity:0;
height:100%;
width:5vh;
z-index:1;
&:hover{ 
    opacity:1;
    transition : 0.3s ease 0s;
}
}

ul li button{
    &:before{
        font-size:12px;
        color: rgb(150,150,171);
    }
}

li.slick-active button:before {
        color:white;
    }
.slick-list {
    overflow:initial;
}
    .slick-prev{
        left:-75px;
    }
    .slick-prev{
        right:-75px;
    }

`,m=d.a.div`
border-radius:4px;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
display:block;
position: relative;
padding:4px;

img{
    width:100%;
    height:100%; 
}

&:hover{
    padding:0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration:300ms;
}
`,h=d.a.div`
margin-top:30px;
padding : 30px 30px 26px;
display : grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(5,minmax(0,1fr));

@media (max-width:768px){
    grid-template-columns: repeat(1,minmax(0,1fr));   
}
`,j=d.a.div`
padding-top: 56.25%;
border-radius:10px;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border : 3px solid rgba(249,249,249,0.1);
    transition: transform 300ms var(--ease-standard, ease), border-color 300ms var(--ease-standard, ease);

    img{
        inset:0px;
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:1;
        position: absolute;
        z-index:1;
    }
     video{

        top:0px;
        width:100%;
        height:100%;
        object-fit: cover;
        position:absolute;
        z-index:0;
        opacity:0;
        
        
            }
            &:hover{
                    
            box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform: scale(1.04); 
    border-color: rgba(249, 249, 249, 0.8);
            
    video{
        transition: opacity 300ms var(--ease-standard, ease);
                    opacity:1;
                }
        }
    
`;var u=e=>Object(x.jsxs)(h,{children:[Object(x.jsxs)(j,{children:[Object(x.jsx)("img",{src:"/images/viewers-disney.png",alt:""}),Object(x.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(x.jsx)("source",{src:"/video/1564674844-disney.mp4",type:"video/mp4"})})]}),Object(x.jsxs)(j,{children:[Object(x.jsx)("img",{src:"/images/viewers-marvel.png",alt:""}),Object(x.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(x.jsx)("source",{src:"/video/1564676115-marvel.mp4",type:"video/mp4"})})]}),Object(x.jsxs)(j,{children:[Object(x.jsx)("img",{src:"/images/viewers-national.png",alt:""}),Object(x.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(x.jsx)("source",{src:"/video/1564676296-national-geographic.mp4",type:"video/mp4"})})]}),Object(x.jsxs)(j,{children:[Object(x.jsx)("img",{src:"/images/viewers-pixar.png",alt:""}),Object(x.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(x.jsx)("source",{src:"/video/1564676714-pixar.mp4",type:"video/mp4"})})]}),Object(x.jsxs)(j,{children:[Object(x.jsx)("img",{src:"/images/viewers-starwars.png",alt:""}),Object(x.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(x.jsx)("source",{src:"/video/1608229455-star-wars.mp4",type:"video/mp4"})})]})]}),f=i(9),v=i(22);const O=Object(v.b)({name:"movie",initialState:{newDisney:null,recommanded:null,orignals:null,trending:null},reducers:{setMovie:(e,t)=>{e.newDisney=t.payload.newDisney,e.recommanded=t.payload.recommanded,e.orignals=t.payload.orignals,e.trending=t.payload.trending}}}),{setMovie:w}=O.actions,y=e=>e.movie.recommanded,k=e=>e.movie.newDisney,z=e=>e.movie.trending,S=e=>e.movie.orignals;var I=O.reducer;const E=d.a.div`
    padding: 25px;
`,D=d.a.h3`
    font-family: var(--font-display, inherit);
    font-size: 20px;
    margin: 0 0 4px;
    letter-spacing: 0.2px;
`,L=d.a.div`
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 12px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`,$=d.a.p`
    grid-column: 1 / -1;
    color: var(--color-text-muted, rgba(249, 249, 249, 0.6));
    font-size: 14px;
    padding: 20px 0;
`,A="\n    padding-top: 56%;\n    border-radius: var(--radius-md, 10px);\n    overflow: hidden;\n    position: relative;\n",T=d.a.div`
    ${A}
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
`,R=d.a.div`
    ${A}
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
`;var C=e=>{let{title:t,movies:i}=e;const a=null===i||void 0===i;return Object(x.jsxs)(E,{children:[Object(x.jsx)(D,{children:t}),Object(x.jsxs)(L,{children:[a&&Array.from({length:4}).map(((e,t)=>Object(x.jsx)(R,{},`skeleton-${t}`))),!a&&0===i.length&&Object(x.jsx)($,{children:"Nothing here yet \u2014 check back soon."}),!a&&i.map((e=>Object(x.jsx)(T,{children:Object(x.jsx)(o.b,{to:`/detail/${e.id}`,children:Object(x.jsx)("img",{src:e.cardImg,alt:e.title,loading:"lazy"})})},e.id)))]})]})};var Y=()=>{const e=Object(f.c)(y);return Object(x.jsx)(C,{title:"Recommended for you",movies:e})};var H=()=>{const e=Object(f.c)(k);return Object(x.jsx)(C,{title:"New on Disney+",movies:e})};var M=()=>{const e=Object(f.c)(S);return Object(x.jsx)(C,{title:"Originals",movies:e})};var N=()=>{const e=Object(f.c)(z);return Object(x.jsx)(C,{title:"Trending",movies:e})},P=i(42),B=i(19),G=i(20),U=i(43);const J=Object(P.a)({apiKey:"AIzaSyAF8BWTjQaDEdLwEJ6LqEw4b279dOHI6Qw",authDomain:"ancient-folio-268007.firebaseapp.com",databaseURL:"https://ancient-folio-268007.firebaseio.com",projectId:"ancient-folio-268007",storageBucket:"ancient-folio-268007.appspot.com",messagingSenderId:"914723289628",appId:"1:914723289628:web:7f15cdd19ca3ab3b0a3dd9",measurementId:"G-6BH8V2ZLTK"}),V=Object(B.d)(J),W=Object(G.b)(J),F=new G.a;Object(U.a)(J);var K=V;const Q=Object(v.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:(e,t)=>{e.name=t.payload.name,e.email=t.payload.email,e.photo=t.payload.photo},setSignOutState:e=>{e.name=null,e.email=null,e.photo=null}}}),{setUserLoginDetails:q,setSignOutState:X}=Q.actions,Z=e=>e.user.name,_=e=>e.user.photo;var ee=Q.reducer;var te=()=>{const e=Object(f.b)(),t=Object(f.c)(Z);return Object(a.useEffect)((()=>{if(!t)return;const i=Object(B.e)(Object(B.a)(K,"movies"),(t=>{let i=[],a=[],r=[],s=[];t.docs.forEach((e=>{switch(e.data().type){case"recommend":i=[...i,{id:e.id,...e.data()}];break;case"new":a=[...a,{id:e.id,...e.data()}];break;case"original":r=[...r,{id:e.id,...e.data()}];break;case"trending":s=[...s,{id:e.id,...e.data()}]}})),e(w({recommanded:i,newDisney:a,orignals:r,trending:s}))}));return()=>i()}),[t,e]),Object(x.jsxs)(ie,{children:[Object(x.jsx)(b,{}),Object(x.jsx)(u,{}),Object(x.jsx)(Y,{}),Object(x.jsx)(H,{}),Object(x.jsx)(M,{}),Object(x.jsx)(N,{})]})};const ie=d.a.main`
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
`;var ae=e=>{const t=Object(f.b)(),i=Object(c.f)(),r=Object(f.c)(Z),s=Object(f.c)(_),[n,d]=Object(a.useState)(!1),l=Object(a.useCallback)((e=>{t(q({name:e.displayName,email:e.email,photo:e.photoURL}))}),[t]);Object(a.useEffect)((()=>{const e=Object(G.c)(W,(e=>{e&&(l(e),"/"===i.location.pathname&&i.push("/home"))}));return()=>e()}),[i,l]),Object(a.useEffect)((()=>{const e=()=>d(window.scrollY>24);return e(),window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)}),[]);const p=()=>{r?r&&Object(G.e)(W).then((()=>{t(X()),i.push("/")})).catch((e=>alert(e.message))):Object(G.d)(W,F).then((e=>{l(e.user)})).catch((e=>{alert(e.message)}))};return Object(x.jsxs)(re,{$scrolled:n,children:[Object(x.jsx)(se,{children:Object(x.jsx)("img",{src:"/images/logo.svg",alt:"Disney+"})}),r?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(ne,{children:[Object(x.jsxs)(o.b,{to:"/home",children:[Object(x.jsx)("img",{src:"/images/home-icon.svg",alt:"HOME"}),Object(x.jsx)("span",{children:"HOME"})]}),Object(x.jsxs)(o.b,{to:"/home",children:[Object(x.jsx)("img",{src:"/images/search-icon.svg",alt:"SEARCH"}),Object(x.jsx)("span",{children:"SEARCH"})]}),Object(x.jsxs)(o.b,{to:"/home",children:[Object(x.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"WATCHLIST"}),Object(x.jsx)("span",{children:"WATCHLIST"})]}),Object(x.jsxs)(o.b,{to:"/home",children:[Object(x.jsx)("img",{src:"/images/original-icon.svg",alt:"ORIGINALS"}),Object(x.jsx)("span",{children:"ORIGINALS"})]}),Object(x.jsxs)(o.b,{to:"/home",children:[Object(x.jsx)("img",{src:"/images/movie-icon.svg",alt:"MOVIES"}),Object(x.jsx)("span",{children:"MOVIES"})]}),Object(x.jsxs)(o.b,{to:"/home",children:[Object(x.jsx)("img",{src:"/images/series-icon.svg",alt:"SERIES"}),Object(x.jsx)("span",{children:"SERIES"})]})]}),Object(x.jsxs)(pe,{children:[Object(x.jsx)(ce,{src:s,alt:r}),Object(x.jsx)(de,{children:Object(x.jsx)(le,{type:"button",onClick:p,children:"Sign Out"})})]})]}):Object(x.jsx)(oe,{onClick:p,children:"Login"})]})};const re=d.a.nav`
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
    background-color: ${e=>{let{$scrolled:t}=e;return t?"#090b13":"rgba(9, 11, 19, 0.35)"}};
    backdrop-filter: ${e=>{let{$scrolled:t}=e;return t?"none":"blur(6px)"}};
    box-shadow: ${e=>{let{$scrolled:t}=e;return t?"0 4px 20px rgba(0, 0, 0, 0.35)":"none"}};
    transition: background-color 250ms var(--ease-standard, ease), box-shadow 250ms var(--ease-standard, ease);
`,se=d.a.a`
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
`,ne=d.a.div`
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
`,oe=d.a.a`
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
`,ce=d.a.img`
    height: 100%;
    border-radius: 50px;
    border: 2px solid transparent;
    transition: border-color 200ms var(--ease-standard, ease);
`,de=d.a.div`
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
`,le=d.a.button`
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
`,pe=d.a.div`
    position: relative;
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    ${ce} {
        width: 100%;
        height: 100%;
    }
    &:hover, &:focus-within {
        ${ce} {
            border-color: rgba(249, 249, 249, 0.6);
        }
        ${de} {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
    }
`,xe=d.a.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`,be=d.a.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 80px 20px;
`,ge=d.a.div`
  height: 100vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  background-image:
    linear-gradient(180deg, rgba(10, 14, 23, 0.55) 0%, rgba(10, 14, 23, 0.85) 100%),
    url('/images/login-background.jpg');
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`,me=d.a.div`
  margin-bottom: 2px;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
  animation: rise 700ms var(--ease-standard, ease-out) both;

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,he=d.a.img`
  margin-bottom: 20px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
  filter: drop-shadow(0 12px 30px rgba(0, 0, 0, 0.45));
`,je=d.a.a`
  font-family: var(--font-body, inherit);
  font-weight: 700;
  margin-bottom: 16px;
  width: 100%;
  max-width: 320px;
  border-radius: var(--radius-sm, 5px);
  font-size: 18px;
  border: 1px solid transparent;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  background-color: #0063e5;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 99, 229, 0.35);
  transition: transform 200ms var(--ease-standard, ease), background-color 200ms var(--ease-standard, ease),
    box-shadow 200ms var(--ease-standard, ease);

  &:hover {
    background-color: #1a75f0;
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 99, 229, 0.45);
  }

  &:active {
    transform: translateY(0);
  }
`,ue=d.a.p`
  font-size: 14px;
  font-family: var(--font-body, sans-serif);
  color: hsla(0, 0%, 95.3%, 0.8);
  max-width: 560px;
  margin: 0 0 28px;
  line-height: 1.6;
  letter-spacing: 0.3px;
`,fe=d.a.img`
  max-width: 600px;
  min-height: 1px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  margin-bottom: 20px;
  opacity: 0.95;
`;var ve=e=>Object(x.jsx)(xe,{children:Object(x.jsxs)(be,{children:[Object(x.jsxs)(me,{children:[Object(x.jsx)(he,{src:"/images/cta-logo-one.svg",alt:""}),Object(x.jsx)(je,{onClick:e.onClick,children:"Get All There"}),Object(x.jsx)(ue,{children:"Get Premier Access to Raya and Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundel will incresed by Rs 1000."}),Object(x.jsx)(fe,{src:"/images/cta-logo-two.png",alt:""})]}),Object(x.jsx)(ge,{})]})});i(72);const Oe=d.a.div`
margin : 24px;
display:block;
position: relative;
top:72px;
overflow-x: hidden;
min-height: calc(100vh - 250px);
padding: 0 calc(3.5vw + 5px);
`,we=d.a.div`
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
`,ye=d.a.div`
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
`,ke=d.a.div`
    max-width: 874px;

`,ze=d.a.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin : 24px;
    min-height: 56px;
`,Se=d.a.button`
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

`,Ie=Object(d.a)(Se)`
    background: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color : rgb(249 , 249, 249);

`,Ee=d.a.div`
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
`,De=Object(d.a)(Ee)`

`,Le=d.a.div`
 color : rgba(249,249,249, 0.75);
    font-size:15px;
    font-weight: 500;
    letter-spacing: 0.4px;
    min-height:20px;
    @media (max-width: 768px){
        font-size:12px;
    }
`,$e=d.a.div`
color : rgb(249,249,249);
    font-size:19px;
    max-width: 730px;
    line-height:1.5;
    padding:16px 0px;
    
    @media (max-width: 768px){
        font-size:14px;
    }
`;var Ae=e=>{const{id:t}=Object(c.g)(),[i,r]=Object(a.useState)({}),[s,n]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{let e=!0;return(async()=>{try{const i=Object(B.b)(K,"movies",t),a=await Object(B.c)(i);if(!e)return;a.exists()?(r(a.data()),n(!1)):(console.log("no such document in firebase"),n(!0))}catch(i){console.log("Error getting document: ",i),n(!0)}})(),()=>{e=!1}}),[t]),s?Object(x.jsx)(Oe,{children:Object(x.jsx)(Le,{children:"Sorry, we couldn't find that title."})}):Object(x.jsxs)(Oe,{children:[Object(x.jsx)(we,{children:Object(x.jsx)("img",{src:i.backgroundImg,alt:i.title||""})}),Object(x.jsx)(ye,{children:Object(x.jsx)("img",{src:i.titleImg,alt:i.title||""})}),Object(x.jsxs)(ke,{children:[Object(x.jsxs)(ze,{children:[Object(x.jsxs)(Se,{children:[Object(x.jsx)("img",{src:"/images/play-icon-black.png",alt:""}),Object(x.jsx)("span",{children:" play "})]}),Object(x.jsxs)(Ie,{children:[Object(x.jsx)("img",{src:"/images/play-icon-white.png",alt:""}),Object(x.jsx)("span",{children:"trailer"})]}),Object(x.jsxs)(Ee,{children:[Object(x.jsx)("span",{}),Object(x.jsx)("span",{})]}),Object(x.jsx)(De,{children:Object(x.jsx)("img",{src:"/images/group-icon.png",alt:""})})]}),Object(x.jsx)(Le,{children:i.subTitle}),Object(x.jsx)($e,{children:i.description})]})]})};var Te=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(ae,{}),Object(x.jsxs)(c.c,{children:[Object(x.jsx)(c.a,{exact:!0,path:"/",children:Object(x.jsx)(ve,{})}),Object(x.jsx)(c.a,{path:"/home",children:Object(x.jsx)(te,{})}),Object(x.jsx)(c.a,{path:"/detail/:id",children:Object(x.jsx)(Ae,{})})]})]})})},Re=Object(v.a)({reducer:{user:ee,movie:I},middleware:e=>e({serializableCheck:!1})});n.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(f.a,{store:Re,children:Object(x.jsx)(Te,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.08f2f34c.chunk.js.map