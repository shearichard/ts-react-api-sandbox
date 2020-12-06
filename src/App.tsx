import React from 'react';
import { Box, BoxProps, Button, FormField, Heading, Grommet, Select } from 'grommet';
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
  const [value, setValue] = React.useState('medium');
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>
            <Heading level='3' margin='none'>Down to Zero</Heading>
            <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box flex align='center' justify='center'>
            <Heading margin='large' level='3' >Test of the Select component</Heading>
            <FormField label="Size">
                <Select
                  options={['small', 'medium', 'large']}
                  value={value}
                  onChange={({ option }) => setValue(option)}
                />
            </FormField>
            <Heading margin='large' level='6' >{ value } has been chosen.</Heading>
          </Box>

          <Box
            width='medium'
            background='light-2'
            elevation='small'
            align='center'
            justify='center'
          >
            sidebar
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
