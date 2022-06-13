import { Box, Text, VStack, Grid } from '@chakra-ui/react'
import { Chakra } from '../../Chakra'
import { Layout } from '@components/Layout'

interface IndexProps {
  cookies?: string
}

const IndexPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Oficios">
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Text>Control de oficios</Text>
          </VStack>
        </Grid>
      </Box>
    </Layout>
  </Chakra>
)

export default IndexPage
export { getServerSideProps } from '../../Chakra'
