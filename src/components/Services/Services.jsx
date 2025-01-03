import { useState } from 'react';
import {
  ServicesBlockContainer,
  ServicesBlockItem,
  ServicesBlockItemWithBorder,
  ServicesBlockSubTitle,
  ServicesChoose,
  ServicesImg,
  ServicesMainContainer,
  ServicesMainTitle,
  ServicesMainTitleContainer,
  ServicesMainTitleContainerChoose,
  ServicesSubTitle,
  ServicesSubTitleContainer,
  ServicesTitle,
  ServicesTopCon,
  ServicesTopImgContainer,
  ServicesTopImgContainerChoose,
} from './Services.styled';
import headphones from '../../images/headphones.svg';

const Services = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([]); // Массив выбранных индексов

  const data = [
    {
      img: {
        default: <ServicesImg color="black" alt='headphones' />,
        selected: <ServicesImg color="white" alt='headphones' />,
      },
      title: 'Обслуговування клієнтів',
      subTitle:
        'Оптимізація процессів  консультації по продукту, шляхом зменьшення вартості процессу, та збільшення еффективності за рахунок ШІ.',
    },
    {
      img: headphones,
      title: 'Оптимізація продажу',
      subTitle:
        'Оптимізація процессів продажу та консультації по продукту, шляхом зменьшення вартості процессу, та збільшення еффективності за рахунок ШІ.',
    },
    {
      img: headphones,
      title: 'Оперативна еффективність',
      subTitle:
        'ШІ має можливість швидко обробляти великі обсяги даних, проводити аналіз, та приймати рішення, що значно покращує якість роботи.',
    },
    {
      img: headphones,
      title: 'Менше рутинних завдань',
      subTitle:
        'ШІ має можливість швидко обробляти великі обсяги даних, проводити аналіз, та приймати рішення, що значно покращує якість роботи.',
    },
    {
      img: headphones,
      title: 'Аналіз ринку та адаптивність',
      subTitle:
        'ШІ має можливість швидко обробляти великі обсяги даних, проводити аналіз, та приймати рішення, що значно покращує якість роботи.',
    },
    {
      img: headphones,
      title: 'Маркетинг та SEO',
      subTitle:
        'ШІ має можливість швидко обробляти великі обсяги даних, проводити аналіз, та приймати рішення, що значно покращує якість роботи.',
    },
  ];

  const handleSelect = index => {
    // Если элемент уже выбран, удаляем его из массива, если нет — добавляем
    if (selectedIndexes.includes(index)) {
      setSelectedIndexes(selectedIndexes.filter(i => i !== index)); // Удаляем из массива
    } else {
      setSelectedIndexes([...selectedIndexes, index]); // Добавляем в массив
    }
  };

  return (
    <ServicesMainContainer>
      <ServicesTitle>Sanity / Company</ServicesTitle>
      <ServicesMainTitle>Послуги за допомогою АІ</ServicesMainTitle>
      <ServicesSubTitleContainer>
        <ServicesSubTitle>
          Тут послуги які ми собственно предоставляємо
        </ServicesSubTitle>
        <ServicesChoose>вибрано: {selectedIndexes.length}</ServicesChoose>
      </ServicesSubTitleContainer>
      <ServicesBlockContainer>
        {data?.map((item, index) => {
          const isSelected = selectedIndexes.includes(index); // Проверяем, выбран ли элемент

          return isSelected ? (
            <ServicesBlockItemWithBorder
              key={index}
              onClick={() => handleSelect(index)}
            >
              <ServicesTopCon>
                <ServicesTopImgContainerChoose>
                  <ServicesImg color="white" alt={item.title} />
                </ServicesTopImgContainerChoose>
                <ServicesMainTitleContainerChoose>
                  {item.title}
                </ServicesMainTitleContainerChoose>
              </ServicesTopCon>
              <ServicesBlockSubTitle>{item.subTitle}</ServicesBlockSubTitle>
            </ServicesBlockItemWithBorder>
          ) : (
            <ServicesBlockItem
              key={index}
              onClick={() => handleSelect(index)} // Обработчик клика
            >
              <ServicesTopCon>
                <ServicesTopImgContainer>
                  <ServicesImg color="black" alt={item.title} />
                </ServicesTopImgContainer>
                <ServicesMainTitleContainer>
                  {item.title}
                </ServicesMainTitleContainer>
              </ServicesTopCon>
              <ServicesBlockSubTitle>{item.subTitle}</ServicesBlockSubTitle>
            </ServicesBlockItem>
          );
        })}
      </ServicesBlockContainer>
    </ServicesMainContainer>
  );
};

export default Services;
