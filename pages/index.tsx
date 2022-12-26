import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import {
  Box,
  Flex,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Highlight,
  Button,
  Tag,
  HStack,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width to state
      windowSize !== window.innerWidth
        ? setWindowSize(window.innerWidth)
        : null;
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]); // Re-run the effect if window size changes

  return (
    <div>
      <Head>
        <title>Bags Interview Assessment</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box maxW='960px' mx='auto' my={12} border='2px' borderColor='gray.200'>
          <Flex mt='20' align='center' direction='column'>
            <Card
              variant='elevated'
              border='2px'
              borderColor='#868686'
              style={{ width: '22.5rem', height: 'auto' }}
            >
              <CardHeader pb={0}>
                <Tag
                  pos='absolute'
                  top='-3'
                  right='5'
                  size='sm'
                  variant='solid'
                  colorScheme='purple'
                >
                  <Text px={5} size='sm'>
                    Good Fit
                  </Text>
                </Tag>
                <Heading size='md'>Revenue Based Financing</Heading>
              </CardHeader>

              <CardBody p={0} className={styles.shadow}>
                <Stack
                  divider={
                    <StackDivider borderColor='#868686' borderWidth={1} />
                  }
                  spacing='4'
                >
                  <Box px={5}>
                    <Text pt='2' fontSize='xs' fontWeight='600'>
                      By Lendistry
                    </Text>
                    <Text pt='2' fontSize='xs' fontWeight='600'>
                      <Icon as={HiOutlineLocationMarker} mr={2} />
                      Location
                    </Text>
                    <Text pt='2' fontSize='xs' fontWeight='600'>
                      <Highlight
                        query='12 days'
                        styles={{ py: '1', fontWeight: 'bold' }}
                      >
                        Get Funded in 12 days
                      </Highlight>
                    </Text>
                  </Box>
                  <Box>
                    <Text px={5} fontWeight='700' size='sm' color='purple.500'>
                      $10,000 - $1,000,000
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Card
              border='2px'
              borderColor='#868686'
              style={{ borderTop: 'none', width: '22.5rem', height: 'auto' }}
              top='3'
            >
              <CardHeader pb={0}>
                <HStack spacing={8} direction='row'>
                  <Heading size='md'>About The Lender</Heading>

                  <Button
                    style={{
                      backgroundColor: windowSize <= 1350 ? 'black' : 'blue',
                      color: 'white',
                    }}
                    size='sm'
                    px={5}
                  >
                    Learn More
                  </Button>
                </HStack>
              </CardHeader>

              <CardBody p={0} className={styles.shadow}>
                <Stack
                  divider={
                    <StackDivider borderColor='#868686' borderWidth={1} />
                  }
                  spacing='4'
                >
                  <Box px={5}>
                    <Text pt='2' fontSize='xs' fontWeight='600'>
                      By Lendistry
                    </Text>
                    <Text pt='2' fontSize='xs' fontWeight='600'>
                      <Icon as={HiOutlineLocationMarker} mr={2} />
                      Location
                    </Text>
                    <Text pt='2' fontSize='xs' fontWeight='600'>
                      <Highlight
                        query='12 days'
                        styles={{ py: '1', fontWeight: 'bold' }}
                      >
                        Get Funded in 12 days
                      </Highlight>
                    </Text>
                  </Box>
                  <Box>
                    <Text px={5} fontWeight='700' size='sm' color='purple.500'>
                      $10,000 - $1,000,000
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </Flex>
        </Box>
      </main>
    </div>
  );
};

export default Home;
