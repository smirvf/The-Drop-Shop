import styled from 'styled-components'
import { SizeGridInterface } from './sizegrid.types';
import { Size } from '@/types/product';
import { useState } from 'react';

const StyledSizeGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    margin: 30px;
`;

interface ButtonProps {
    size: Size;
    highlightedSize: string;
    o?: {
        onClick: any;
    }
}

const Button = styled.button<ButtonProps>`
  border-radius: 4px;
  border: ${(props) => (props.size.stock > 0 ? "2px solid #D9D9D9" : "none")};
  width: 125px;
  height: 50px;
  font-size: 22px;
  font-weight: 300;
  color: ${(props) => (props.size.stock > 0 ? "#1F1F1F" : "#FFF")};
  background-color: ${(props) =>
    props.size.stock > 0 ? "transparent" : "#1F1F1F"};
  background-color: ${(props) =>
    props.highlightedSize === props.size.sizeId ? "#B464E4" : ""};

  ${(props) =>
    props.size.stock > 0 &&
    `
    &:hover {
      cursor: pointer;
      border-color: #1F1F1F;
    }
  `}
`;


export const SizeGrid = (props: SizeGridInterface) => {

    const [highlightedSize, setHighlightedSize] = useState<string>("");
    
    const handleSizeSelected = (event: any, size: Size) => {
        event.preventDefault();
        setHighlightedSize(size.sizeId);
        props.setSelectedSize(size);
    }

    return (
        <StyledSizeGrid>
            {props.sizes.map((size, index) => (
                <div key={index}>
                    <Button size={size} highlightedSize={highlightedSize} onClick={event => handleSizeSelected(event, size)}>UK {size.size}</Button>
                </div>
            ))}
        </StyledSizeGrid>
    );
}