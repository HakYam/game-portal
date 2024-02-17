import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral" p="4">
        Navigation
      </GridItem>
      <Show above='lg'>
        <GridItem area="aside" bg="gold" p="4">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="orange" p="4">
        Main Content
      </GridItem>
    </Grid>
  );
}

export default App;
