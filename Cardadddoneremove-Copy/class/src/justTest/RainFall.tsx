/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animation for raindrops
const fall = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0.7;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
`;

const RainDrop = styled.div`
  position: absolute;
  top: 0;
  left: ${({ left }: { left: number }) => `${left}%`};
  width: 2px;
  height: 20px;
  background: blue;
  animation: ${fall} 2s linear infinite;
  animation-delay: ${({ delay }: { delay: number }) => `${delay}s`};
`;

const RainContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #1e1e2f, #121212);
  color: white;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const RainEffect: React.FC = () => {
  const [raining, setRaining] = useState(true);

  useEffect(() => {
    // const timer = setTimeout(() => setRaining(false), 10000); // Rain stops after 5 seconds
    // return () => clearTimeout(timer);
  }, []);

  const rainDrops = Array.from({ length: 100 }, (_, index) => ({
    left: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <RainContainer>
      {raining &&
        rainDrops.map((drop, index) => (
          <RainDrop key={index} left={drop.left} delay={drop.delay} />
        ))}
    </RainContainer>
  );
};

const Rain: React.FC = () => {
  return (
    <div>
      <RainEffect />
      <PortfolioContainer>
        <Heading>Ogunyemi Samuel</Heading>
        <SubHeading>Frontend Software Engineer</SubHeading>
        <p>With 3 years of experience building amazing web applications.</p>
      </PortfolioContainer>
    </div>
  );
};

export default Rain;

// import React, { useEffect, useState } from "react";
// import styled, { keyframes } from "styled-components";
// import horse from "../assets/eg.horse.gif";

// // Keyframes for the running horse animation
// const runAcross = keyframes`
//   0% {
//     transform: translateX(-100%);
//   }
//   100% {
//     transform: translateX(100%);
//   }
// `;

// const HorseContainer = styled.div`
//   position: absolute;
//   bottom: 50px; /* Position the horse near the bottom of the screen */
//   width: 100px;
//   animation: ${runAcross} 5s linear forwards;
// `;

// const PortfolioContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background: linear-gradient(to bottom, #1e1e2f, #121212);
//   color: white;
//   font-family: Arial, sans-serif;
// `;

// const Heading = styled.h1`
//   font-size: 2.5rem;
// `;

// const SubHeading = styled.h2`
//   font-size: 1.5rem;
//   margin: 10px 0;
// `;

// const HorseAnimation: React.FC = () => {
//   const [showHorse, setShowHorse] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowHorse(false), 5000); // Horse disappears after 5 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {showHorse && (
//         <HorseContainer>
//           <img src={horse} alt="Running Horse" />
//         </HorseContainer>
//       )}
//     </>
//   );
// };

// const Rain: React.FC = () => {
//   return (
//     <div>
//       <HorseAnimation />
//       <PortfolioContainer>
//         <Heading>Ogunyemi Samuel</Heading>
//         <SubHeading>Frontend Software Engineer</SubHeading>
//         <p>With 3 years of experience building amazing web applications.</p>
//       </PortfolioContainer>
//     </div>
//   );
// };

// export default Rain;
