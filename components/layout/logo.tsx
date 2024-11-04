import { chakra, HTMLChakraProps } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  return (
    <chakra.div {...props}>
      <Image 
        src="/static/favicons/2.png" 
        alt="Logo" 
        width={150} // Adjust the width as needed
        height={50} // Adjust the height as needed
      />
    </chakra.div>
  );
};
