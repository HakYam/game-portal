import { HStack, Switch, useColorMode, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons from React Icons

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      {colorMode === "dark" ? <Icon as={FaMoon} /> : <Icon as={FaSun} />}
    </HStack>
  );
};

export default ColorModeSwitch;
