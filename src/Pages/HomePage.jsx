import styled from "styled-components";
import Particle from "../Components/Particle";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import YoutubeIcon from "@mui/icons-material/YouTube";
// import { useRef, useEffect} from 'react';
// import { TweenMax, Power3 } from 'gsap';

const HomePage = () => {
  // const logoCesar = useRef(null);

  // useEffect(() => {
  //   TweenMax.to(
  //     toggleItem,
  //     4,
  //     {
  //       opacity: 1,
  //       y: -30,
  //       ease: Power3.easeOut
  //     }
  //   )
  //   }, [])

  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <div className="name">
          {/* <h1>
            <span>Cesar Maaz</span>
          </h1> */}
          <img 
              // ref={el => logoCesar = el}
              src="https://blog.flamingtext.com/blog/2022/02/08/flamingtext_com_1644331233_200832461.gif" 
              border="0" 
              alt="Logo Design by FlamingText.com" 
              title="Logo Design by FlamingText.com"
              />
        </div>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Front-End Developer</div>
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">UI/UX Designer</div>
            <div className="i-title-item">Content Creator</div>
          </div>
        </div>
        <div className="icons">
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            className="icon i-facebook"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            className="icon i-github"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://codepen.io/pen/"
            target="_blank"
            className="icon i-youtube"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    /* height: 50vh; */
    /* display: flex;
    flex-direction: column; */

    .name {
      height: 40vh;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }

    .i-title {
      height: 50px;
      overflow: hidden;
    }

    .i-title-wrapper {
      height: 100%;
      animation: move 4s ease-in-out infinite alternate;
    }

    @keyframes move {
      33% {
        transform: translateY(-50px);
      }
      66% {
        transform: translateY(-100px);
      }
      100% {
        transform: translateY(-150px);
      }
    }

    .i-title-item {
      height: 50px;
      font-size: 2rem;
      font-weight: bold;
      color: var(--secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1200px) {
        font-size: 1.6rem;
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
