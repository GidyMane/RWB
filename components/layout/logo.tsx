import { chakra, HTMLChakraProps, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  const { colorMode } = useColorMode(); // Access the current color mode

  return (
    <chakra.div {...props}>
      <Image
        src={colorMode === 'dark' ? '/static/favicons/4.png' : '/static/favicons/2.png'}
        alt="Logo"
        width={80}
        height={30}
      />
    </chakra.div>
  );
};
