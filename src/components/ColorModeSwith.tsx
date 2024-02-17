import { HStack, Switch, useColorMode , Text} from "@chakra-ui/react";


const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode ();

  return (
    <HStack>
      <Switch colorScheme="blue" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
