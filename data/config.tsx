import { Button } from '@chakra-ui/react';
import { Link } from '@saas-ui/react';
import { NextSeoProps } from 'next-seo';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { Logo } from './logo';

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Saas UI',
    description: '',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '#',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by <Link href="#">NDEKA OBAD SOLUTIONS</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:info@rosewillbome.com',
        label: 'Contact',
      },
      {
        href: 'https://x.com/rbometech?s=21',
        label: <FaTwitter size="14" />,
      },
      // {
      //   href: '#',
      //   label: <FaGithub size="14" />,
      // },
      {
        href: 'https://www.linkedin.com/company/rosewill-bome-technologies/',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://www.facebook.com/profile.php?id=61568283717463&mibextid=LQQJ4d',
        label: <FaFacebook size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
};

export default siteConfig;
