import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 98.85%;
  height: 50px;
  padding:15px;
  background-color:black;
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight:700;
font-size: xx-large;
text-transform: uppercase;
color:#fff;
`;

const Cart = styled.div`
margin-right: 20px;
position: relative;
cursor:pointer;
`;
const CartImg = styled.img`
width:35px;
height:35px;
filter: brightness(0) invert(1);

`;
const Cartcount = styled.div`
background: ${(props) => props.color};
filter: opacity(90%);
border-radius:50%;
padding: 2px 8px;
position:absolute;
right:-5px;
top: -5px;
visibility: ${(props) => props.show? "visible" : "hidden"}
`;




class Navbar extends React.Component {
    
    render() {
        const {cartCount} = this.props
        return (
            <>
                <Nav>
                    <Title>Movie Flix</Title>
                    <Cart>
                        <CartImg
                            alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/253/253298.png" />
                        <Cartcount color = "lightblue" show = {true}>{cartCount}</Cartcount>
                    </Cart>
                </Nav>

            </>
        )
    }
}

export default Navbar;