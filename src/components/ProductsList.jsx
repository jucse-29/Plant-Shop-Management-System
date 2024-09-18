import styled from "styled-components";
import { BestSealing } from "../Data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {BestSealing.map((item) => (
        <Product item={item} key={item.id} title={item.Name}/>
      ))}
    </Container>
  );
};

export default Products;