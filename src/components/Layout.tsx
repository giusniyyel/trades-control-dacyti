import { ReactNode } from 'react'
import Head from 'next/head'
import { Container, Flex, Heading, HStack } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Logo } from './Logo'
import { NextChakraLink } from './NextChakraLink'

type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'Control de oficios' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
      <header>
        <Flex py={4} justifyContent="space-between" alignItems="center" mb={8}>
          <Flex justifyContent="space-between" alignItems="center">
            <nav>
              <HStack spacing={12}>
                <NextChakraLink
                  href="/"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Logo h="1.5rem" pointerEvents="none" mr={4} />
                  <Heading size="lg">Doctrl</Heading>
                </NextChakraLink>
                <NextChakraLink href="/trades" fontWeight="bold">
                  Oficios
                </NextChakraLink>
                <NextChakraLink href="/people" fontWeight="bold">
                  Pasantes
                </NextChakraLink>
                <NextChakraLink href="/status" fontWeight="bold">
                  Estados de Oficios
                </NextChakraLink>
              </HStack>
            </nav>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </header>
      {children}
    </Container>
  </div>
)
