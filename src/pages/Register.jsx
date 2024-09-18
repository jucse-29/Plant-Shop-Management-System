import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://media.istockphoto.com/id/514423950/photo/girl-in-park-covering-face-with-sunflower.jpg?s=2048x2048&w=is&k=20&c=XaBw1-oYdVYFmnrNG5m4v9L7HdC6St-L_WVwgW_sz2I=")
      center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 40px 20px;
  background-color: rgba(0, 105, 137, 0.9);
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  ${mobile({ width: "75%", padding: "20px" })}
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: #f3f7ec;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 450px; /* Increased height */
  padding-left: 20px; /* Added left padding */
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  outline: none;
  &:focus {
    border-color: #f3f7ec;
  }
`;

const Agreement = styled.span`
  font-size: 14px;
  color: #f3f7ec;
  margin: 20px 0px;
  text-align: center;
  width: 100%;
`;

const Button = styled.button`
  width: 60%;
  border: none;
  padding: 15px 20px;
  background-color: #4caf50; /* Pure green color */
  color: #fff; /* White text color */
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049; /* Darker shade of green on hover */
  }
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>SUBMIT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
