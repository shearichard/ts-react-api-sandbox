import React from 'react';
import { Box, BoxProps, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
        brand: '#556b2f',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar: React.FC<BoxProps> = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: 1 }}
    {...props}
  />
);

function App() {
  return (
    <Grommet theme={theme}>
        <AppBar>
            <Heading level='3' margin='none'>Down to Zero</Heading>
            <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
    </Grommet>
  );
}

export default App;
