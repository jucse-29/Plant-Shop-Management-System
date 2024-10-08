import  styled from "styled-components";
import { categories } from "../Data";
import React from "react";
import { mobile } from "../Responsive";
import CategoryItems from "./CategoryItems";
const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({ padding: "0px", flexDirection:"column" })}

`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item}key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
