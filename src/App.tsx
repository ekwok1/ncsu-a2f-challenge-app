import { Card, Grid, useTheme } from '@aws-amplify/ui-react';

import './App.css';
import logo from './logo.png';

function App() {
  const { tokens } = useTheme();

  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      templateRows="10vh 90vh"
    >
      <Card
        columnStart="1"
        columnEnd="-1"
        backgroundColor={tokens.colors.red[40]}
      >
        Header
      </Card>
      <Card
        columnStart="1"
        columnEnd="3"
        backgroundColor={tokens.colors.blue[40]}
      >
        Main
      </Card>
      <Card
        columnStart="3"
        columnEnd="-1"
        backgroundColor={tokens.colors.green[40]}
      >
        Main
      </Card>
    </Grid>
  );
}

export default App;
