import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import star from "../assets/star.png";
import star2 from "../assets/star2.png";

export const Start = ({
  initialState = false,
  disabled = false,
  onSelect = () => {},
}) => {
  const [isSelected, setSelected] = useState(initialState);
  const onPress = () => {
    const nexState = !isSelected;
    setSelected(!isSelected);
    onSelect(nexState);
  };
  return (
    <>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <Image
          source={isSelected ? star2 : star}
          style={{ height: 40, width: 40 }}
        ></Image>
      </TouchableOpacity>
    </>
  );
};
