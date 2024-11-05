const CTA = {
  parts: ['wrapper', 'title', 'action', 'secondaryAction'],
  baseStyle: {
    wrapper: {
      pt: 28,
      pb: 28,
    },
    action: {
      colorScheme: 'orange', // Set primary action to orange color scheme
    },
    secondaryAction: {
      colorScheme: 'orange', // Set secondary action to orange color scheme
      variant: 'ghost',
    },
  },
  variants: {
    subtle: {},
    solid: {
      wrapper: {
        bg: 'orange.400', // Set solid variant background to orange
      },
      secondaryAction: {
        colorScheme: 'white', // Keep secondary action color scheme white in solid variant
      },
    },
    light: ({ colorMode }: any) => ({
      wrapper: {
        bg: colorMode === 'dark' ? 'gray.700' : 'gray.100',
      },
    }),
  },
  defaultProps: {
    variant: 'subtle',
  },
};

export default CTA;
