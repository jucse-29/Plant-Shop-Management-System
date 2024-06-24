import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0.9, 0, 0.78, 0.4);
  opacity: 0;
  transition: opacity 0.9s ease;
`;

const Title = styled.h1`
  color: purple;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: black;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SEE MORE</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
