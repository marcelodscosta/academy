import {
  Image,
  VStack,
} from '@gluestack-ui/themed';

import BackgroundImg from '../assets/background.png';

export function SignIn() {
  return (
    <VStack flex={1} bg='#121214'>

      <Image
        source={BackgroundImg}
        alt='academy'
        position='absolute'
        resizeMode='cover'
        w='100%'
        h='100%'
      />

    </VStack>
  );
};
