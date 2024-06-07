import { Flex, Card, Text, CardHeader, CardBody, CardFooter, Box, Grid, GridItem } from '@chakra-ui/react';
import { QUERY_STYLES } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Home = () => {
  const { data } = useQuery(QUERY_STYLES);
  const navigate = useNavigate();

  const goToSingleStyle = (styleId) => {
    navigate(`/styles/${styleId}`);
  };

  const trimStyle = (text) => {
    const styles = text.split('').slice(0, 50).join('') + '...';
    return `
${styles} \n
</style>
`;
  };
  return (
    <Box mx="auto" minH="800px" maxW="1280px" mt="3rem" w="100%" bg="gray.100">
      <Grid gap="10px" templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}>
        {data &&
          data.styles.map((style) => {
            return (
              <GridItem my="1rem" key={style._id} justifySelf="center">
                <Card>
                  <CardHeader
                    cursor="pointer"
                    onClick={() => goToSingleStyle(style._id)}
                    fontSize="1.2rem"
                    fontWeight="bold"
                    color="gray.100"
                    bg="teal.500"
                  >
                    {style.title}
                  </CardHeader>
                  <CardBody color="green.500">{trimStyle(style.style_Text)}</CardBody>
                  <CardFooter flexDir="column">
                    <Flex flexWrap="wrap">
                      {style.tag.map((tag, index) => {
                        return (
                          <Box m="0.75rem" p="0.25rem" borderRadius={12} bg="blue.500" key={index}>
                            <Text color="#fff">{tag}</Text>
                          </Box>
                        );
                      })}
                    </Flex>
                    <Box my="1rem">
                      <Text color="gray.500" fontSize="0.9rem">
                        Posted by{' '}
                        <Box as="span" fontWeight="bold">
                          {style.username}
                        </Box>
                      </Text>
                    </Box>
                  </CardFooter>
                </Card>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Home;
