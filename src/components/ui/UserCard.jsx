import { useState } from "react";
import { styled } from "@mui/material/styles"; 
import { Button } from "../ui/Button";

export const UserCard = ({
  title,
  price,
  oldPrice,
  weight,
  image,
}) => {
  const [count, setCount] = useState(0);
  const hasDiscount = !!(oldPrice && oldPrice > price);

  return (
    <Card>
      <ImageWrapper>
        <img src={image} alt={title} />
        {hasDiscount && <Discount>-20%</Discount>}
      </ImageWrapper>

      <PriceRow>

        <CurrentPrice isDiscount={hasDiscount}>

          {price} сом
        </CurrentPrice>

        {hasDiscount && (
          <OldPrice>{oldPrice} сом</OldPrice>
        )}
      </PriceRow>

      <Title>{title}</Title>
      <Weight>{weight} г</Weight>

      {count === 0 ? (
        <Button 
          onClick={() => setCount(1)}
          variant="outlined"
          style={{ width: "100%", marginTop: "10px",height: "38px" }}
        >
          + Добавить
        </Button>
      ) : (
        <Counter>
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <span>{count}</span>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </Counter>
      )}
    </Card>
  );
};

const Card = styled("div")({
  width: "210px",
  backgroundColor: "#F5F4F2",
  borderRadius: "10px",
  padding: "10px",
});

const ImageWrapper = styled("div")({
  position: "relative",
  "& img": {
    width: "190px",
    height: "168px",
    borderRadius: "10px",
    objectFit: "cover",
  },
});

const Discount = styled("div")({
  position: "absolute",
  bottom: "8px",
  right: "8px",
  backgroundColor: "#4caf50",
  color: "white",
  padding: "4px",
  borderRadius: "6px",
  fontSize: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "15px"
});

const PriceRow = styled("div")({
  display: "flex",
  gap: "8px",
  alignItems: "center",
  marginTop: "8px",
});

const CurrentPrice = styled("span", {
  shouldForwardProp: (prop) => prop !== "isDiscount",
})(({ isDiscount }) => ({
   fontSize: "18px",
  fontWeight: "400",             
  fontFamily: "Helvetica, sans-serif",  // 👈
  color: isDiscount ? "#ff6b00" : "#000",
}));

const OldPrice = styled("span")({
  textDecoration: "line-through",
  color: "#999",
});

const Title = styled("div")({
  marginTop: "6px",
  fontSize: "18px",
  fontWeight: "500",
  fontFamily: "Helvetica, sans-serif",
});

const Weight = styled("div")({
   fontSize: "14px",
  color: "gray",
  fontFamily: "Helvetica, sans-serif",
});

const Counter = styled("div")({
  marginTop: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "6px 10px",
});