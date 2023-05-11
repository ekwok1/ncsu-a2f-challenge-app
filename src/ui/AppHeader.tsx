import { Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import logo from '../logo.png';

function AppHeader() {
  return (
    <Flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
      <Flex alignItems={'center'}>
        <Image src={logo} alt={logo} width={'4rem'} />
        <Heading level={4} color={'white'}>2023 NCSU A2F Small Group Challenge</Heading>
      </Flex>
      <Text fontWeight={600} color={'white'}>Hello, Eugene Kwok</Text>
    </Flex>
  )
}

export default AppHeader;
