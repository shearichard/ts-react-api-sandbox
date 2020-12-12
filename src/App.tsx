import React from 'react';
import { Anchor,
        Box, 
        BoxProps, 
        Button, 
        FormField, 
        Footer,
        Heading, 
        Grommet, 
        Paragraph,
        Select,
        Table, 
        TableBody, 
        TableCell, 
        TableRow,
        Text } from 'grommet';
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
            <Heading level='3' margin='none'>Grommet / Typescript Experiments</Heading>
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
            <Box
              flex 
              align='center' 
              justify='center'
              direction="row"
              border={{ color: 'brand', size: 'large' }}
              pad="medium"
            >
           <Table caption='Colour Selection'>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >NAVY</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/001f3f/001f3f?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >BLUE</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/0074D9/0074D9?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >AQUA</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/7FDBFF/7FDBFF?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >TEAL</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/39CCCC/39CCCC?text=.' />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >OLIVE</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/3D9970/3D9970?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >GREEN</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/2ECC40/2ECC40?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >LIME</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/01FF70/01FF70?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >YELLOW</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/FFDC00/FFDC00?text=.' />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >ORANGE</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/FF851B/FF851B?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >RED</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/FF4136/FF4136?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >MAROON</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/85144b/85144b?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >FUCHSIA</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/F012BE/F012BE?text=.' />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >PURPLE</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/B10DC9/B10DC9?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >BLACK</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/111111/111111?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >GRAY</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/AAAAAA/AAAAAA?text=.' />
                  </TableCell>
                  <TableCell>
                    <Paragraph size='small' margin='none' textAlign='center' >SILVER</Paragraph>
                    <img alt='' src='https://via.placeholder.com/100/DDDDDD/DDDDDD?text=.' /> 
                  </TableCell>
                </TableRow>
              </TableBody>
           </Table>
          </Box>
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
        <Footer background="brand" pad="medium">
          <Text>&#169; 2020 Kubadev</Text>
          <Anchor label="About" />
        </Footer>
      </Box>
    </Grommet>
  );
}

export default App;
