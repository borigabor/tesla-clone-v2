import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const cars = useSelector(selectCars)

    const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            {cars && cars.map((car, index) =>(
                <a key={index} href="#">{car}</a>
            ))}
        </Menu>

        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={toggle}/>
        </RightMenu>
        <BurgerNav isOpen={isOpen}>
            <CloseWrapper>
            <CloseBtn onClick={toggle}/>
            </CloseWrapper>
            {cars && cars.map((car, index) =>(
                <li><a key={index} href="#">{car}</a></li>
                
            ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Use Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Rodaster</a></li>
        </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        white-space: nowrap;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`;

const CustomMenu = styled(FaBars)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    background-color: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transition:  .2s ease-in-out;
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 600;
        }
    }
`;

const CloseBtn = styled(FaTimes)`
    cursor: pointer;
    font-size: 18px;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;