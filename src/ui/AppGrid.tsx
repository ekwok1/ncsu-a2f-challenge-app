import { Card, Grid, View, useTheme } from '@aws-amplify/ui-react';
import AppHeader from './AppHeader';

function AppGrid() {
  const { tokens } = useTheme();

  return (
    <Grid
      templateColumns={{ base: "1fr", large: "2fr 1fr 2fr" }}
      templateRows="1fr 4fr 4fr"
      height={'100vh'}
      backgroundColor={tokens.colors.green[40]}
    >
      <View columnSpan={{ base: 1, large: 3}}>
        <Card backgroundColor={tokens.colors.red[80]} height="100%">
          <AppHeader />
        </Card>
      </View>
      <View columnSpan={{ base: 1, large: 2}} rowSpan={{ base: 1, large: 2}}>
        <Card backgroundColor={tokens.colors.blue[40]} height="100%">Overview</Card>
      </View>
      <View rowSpan={{ base: 1, large: 2}}>
        <Card backgroundColor={tokens.colors.purple[40]} height="100%">Progress</Card>
      </View>
    </Grid>
  )
}

export default AppGrid;
