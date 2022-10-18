import React, { useEffect, useState } from "react";
import { ButtonContainer, ButtonFont } from "./ButtonElements";

const Button = ({ onClick, sx }) => {
  const [hover, setHover] = useState(false);
  const [colorHover, setColorHover] = useState(true);

  useEffect(() => {
    setColorHover(true);
  }, [hover]);

  return (
    <ButtonContainer
      hover={colorHover}
      style={{ ...sx }}
      onHover={() => setHover(!hover)}
      onClick={onClick}
    >
      <ButtonFont hover={colorHover}>Menu</ButtonFont>
    </ButtonContainer>
  );
};

export default Button;
