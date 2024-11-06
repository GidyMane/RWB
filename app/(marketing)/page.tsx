'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'




const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      {/* <PricingSection /> */}

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" hideOverlay={undefined} />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                 Turning Complex Data into clear, 
                <Br /> actionable insights
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Unlock the power of data with our  <Em> MIS and Visualization Dashboard</Em>
                <Br/> designed to simplify insights, enhance efficiency, and support smarter, data-driven decisions for your business. <Br />{' '}
                
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
              <button
  style={{
    backgroundColor: "#fb923c",
    color: "white",
    padding: "0.75rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "0.25rem",
    border: "none",
    cursor: "pointer",
  }}
  onClick={(e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Portfolio.pdf";
    link.download = "memo.pdf";
    link.click();
  }}
>
  Portfolio
</button>

                <ButtonLink
                  size="lg"
                  href="#"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Accessible',
            icon: FiSmile,
            description: 'Our MIS and Visualization Dashboard is built with accessibility in mind, ensuring that data insights are easily accessible to all users, anytime, anywhere, on any device.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Our MIS and Visualization Dashboard is fully customizable to fit your unique needs. Tailor dashboards, reports, and visuals to highlight the data that matters most, giving you a personalized experience that aligns with your business goals and priorities.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Our MIS and Visualization Dashboard is designed to be composable, allowing you to build and integrate only the components you need. Easily add, rearrange, and connect different modules to create a dashboard that adapts to your workflows and grows with your business',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              'Boost productivity with our MIS and Visualization Dashboard—designed to streamline data access and analysis, helping teams make faster, more informed decisions. Spend less time sifting through data and more time driving impactful results',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="MIS Functionalities">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Our MIS provides essential functionalities like data integration, in-depth reporting, performance monitoring, and secure data management, all in one platform. <Em>Gain a 360° view</Em>.
          of your operations to make data-driven decisions with confidence
          </Text>

          {/* <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @mis/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex> */}
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Dashboard Functionalities">
        <Text color="muted" fontSize="lg">
        Our dashboard delivers powerful functionalities, including interactive data visualization, real-time analytics, and customizable widgets, all designed to help you monitor KPIs and trends at a glance. Easily drill down into data, set alerts, and track progress—all in one intuitive interface tailored for actionable insights.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Bosco Ndeka"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['orange.300', 'orange.500']}
      >
        “Our MIS and dashboards have empowered organizations to streamline operations, make informed decisions faster, and boost overall productivity. By providing clear, actionable insights and reducing time spent on manual data processes, we've helped teams achieve greater focus on strategic initiatives and drive impactful results.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Achieve your next idea"
      >
        <Text color="muted" fontSize="lg">
        We've equipped you with all the core MIS and dashboard functionalities, enabling you to concentrate on creating the distinctive features that will differentiate your organization.
        </Text>
        <Wrap mt="8">
          {[
            ' Statistics and Analytics',
            ' User Authentication',
            'Data Integration',
            'Real-time Monitoring',
            'Customizable Dashboards',
            'Data Exporting',  
             'Alerts and Notifications',
             'Collaboration Tools',
             'Historical Data Analysis',
             'Data Visualization',
             'Mobile Access',
             'Custom Reporting',
             'Performance Benchmarking ',
             'Data Filtering',
             'Audit Trail',
             'User Training and Support',
             'API Access',
             'Feedback Mechanism',
            'layouts',
            'billing',
            'a11y testing',
            'server-side rendering',
            'documentation',
            'onboarding',
            'storybooks',
            'theming',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="orange"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          A Revolutionary
          <Br /> MIS Dashboard Solution.
        </Heading>
      }
      description={
        <>
          Our cutting-edge system empowers you to harness data with ease,
          offering dynamic visualizations and intuitive design.
          <Br />
          Get the full picture of your operations, all in one place.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Interactive Dashboards.',
          icon: FiBox,
          description:
            'Visualize your data with rich, interactive dashboards designed to keep you informed in real time. Gain deeper insights, faster.',
          variant: 'inline',
        },
        {
          title: 'Customizable Reports.',
          icon: FiLock,
          description:
            'Generate and customize reports to track KPIs and performance metrics. Our templates are flexible, saving you time and effort.',
          variant: 'inline',
        },
        {
          title: 'Data Visualization Tools.',
          icon: FiSearch,
          description:
            'From charts to graphs, our tools bring your data to life, helping you make data-driven decisions with clarity and confidence.',
          variant: 'inline',
        },
        {
          title: 'User Access Controls.',
          icon: FiUserPlus,
          description:
            'Assign roles and manage user permissions with ease, ensuring secure access to sensitive information across your organization.',
          variant: 'inline',
        },
        {
          title: 'Seamless Data Integration.',
          icon: FiFlag,
          description:
            'Integrate your existing data sources effortlessly, allowing for smooth data flow and a unified view of your operations.',
          variant: 'inline',
        },
        {
          title: 'Real-Time Monitoring.',
          icon: FiTrendingUp,
          description:
            'Stay updated with real-time monitoring and alerts, ensuring you never miss critical changes in your data landscape.',
          variant: 'inline',
        },
        {
          title: 'Themes & Custom Styling.',
          icon: FiToggleLeft,
          description:
            'Customize your dashboards with themes and dark mode support, tailoring the experience to your unique brand and preferences.',
          variant: 'inline',
        },
        {
          title: 'Scalability.',
          icon: FiTerminal,
          description:
            'Built to grow with you, our MIS systems are scalable, accommodating increasing data and expanding team requirements effortlessly.',
          variant: 'inline',
        },
        {
          title: 'High Performance.',
          icon: FiCode,
          description: (
            <>
              Our systems are optimized for speed and efficiency. Powered by
              <Link href="https://turborepo.com">Turborepo</Link>, experience
              fast, seamless data access and updates at scale.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}


const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
