import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../Responsive";
  
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    color: white;
    height: 200px; /* Reduced height */
    ${mobile({ flexDirection: "column", height: "auto" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px; /* Reduced padding */
  `;
  
  const Logo = styled.h1`
    color: white;
    margin-bottom: 10px; /* Added margin to space out the logo */
    font-size: 20px; /* Adjust font size if needed */
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    margin-top: 10px; /* Added margin to space out the social icons */
  `;
  
  const SocialIcon = styled.div`
    width: 30px; /* Reduced size */
    height: 30px; /* Reduced size */
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px; /* Reduced margin */
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 10px; /* Reduced padding */
    display: flex;
    flex-direction: column;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 20px; /* Reduced margin */
    color: white;
    font-size: 16px; /* Adjust font size if needed */
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  `;
  
  const ListItem = styled.li`
    margin-bottom: 5px; /* Reduced margin */
    color: white;
    font-size: 14px; /* Adjust font size if needed */
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 10px; /* Reduced padding */
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 10px; /* Reduced margin */
    display: flex;
    align-items: center;
    color: white;
    font-size: 14px; /* Adjust font size if needed */
  `;
  
  const Payment = styled.img`
    width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Nature</Logo>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>My Account</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Savar, Dhaka, Bangladesh
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> 99-22-33-66
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} /> Nature@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  