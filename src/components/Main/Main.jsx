import {
  MainContainer,
  MainP,
  MedusaImg1,
  MedusaImg2,
  MedusaImg3,
} from './Main.styled';
import MainImg from '../../images/Vector.png';
import medusa1 from '../../images/medusa1.png';
import medusa2 from '../../images/medusa2.png';
import medusa3 from '../../images/medusa3.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export const Main = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.set('.Medusa1', { x: -400, y: -170 });
      gsap.set('.Medusa2', { x: 450, y: 200 });
      gsap.set('.Medusa3', { x: -150, y: 230 });

      gsap.to('.Medusa1', {
        y: '-=20', // Поднимается на 20px вверх
        duration: 2, // Длительность одного цикла
        repeat: -1, // Бесконечное повторение
        yoyo: true, // Обратное движение (вниз)
        ease: 'sine.inOut', // Плавное движение
      });

      gsap.to('.Medusa2', {
        y: '+=30', // Поднимается на 30px
        duration: 2.5, // Длительность одного цикла
        repeat: -1, // Бесконечное повторение
        yoyo: true, // Обратное движение (вниз)
        ease: 'sine.inOut', // Плавное движение
      });

      gsap.to('.Medusa3', {
        y: '-=25', // Поднимается на 25px
        duration: 3, // Длительность одного цикла
        repeat: -1, // Бесконечное повторение
        yoyo: true, // Обратное движение (вниз)
        ease: 'sine.inOut', // Плавное движение
      });
    },
    { scope: container }
  );

  return (
    <MainContainer ref={container} id="SanityAi">
      <img style={{ marginBottom: '100px' }} src={MainImg} alt="SANITYAI" />
      <MedusaImg1 src={medusa1} alt="Medusa1" className="Medusa1" />
      <MedusaImg2 src={medusa2} alt="Medusa2" className="Medusa2" />
      <MedusaImg3 src={medusa3} alt="Medusa3" className="Medusa3" />
      <MainP>From scratch to perfection</MainP>
    </MainContainer>
  );
};
