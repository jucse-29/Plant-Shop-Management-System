import React, { useState, useEffect } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { styled } from "styled-components";
import { sliderItems } from "../Data"; 
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  background-color: white;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg}; /* Apply background color */
`;

const ImgContainer = styled.div`
  height: 80%;
  flex: 1;
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 60px;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
`;

const Image = styled.img`
  height: 100%;
  width: 75%;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Descrip = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  width: 40%;
  font-size: 17px;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item, index) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Descrip>{item.desc}</Descrip>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
