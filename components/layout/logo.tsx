import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  return (
    <chakra.div {...props}>
      <Image 
        src="/static/favicons/2.png" 
        alt="Logo" 
        width={150} 
        height={50} 
      />
    </chakra.div>
  );
};
