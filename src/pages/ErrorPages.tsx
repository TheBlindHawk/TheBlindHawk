import { Box, Button, Text, VStack } from '@chakra-ui/react'

export const RootErrorBoundary = () => {
  return (
    <VStack h={'100vh'} justify={'center'} align={'center'}>
      <Text>予期せぬエラーが発生しました。</Text>
      <Box>
        <Button colorScheme="blue" onClick={() => (window.location.href = '/')}>
          再読み込み
        </Button>
      </Box>
    </VStack>
  )
}

export const NotFoundPage = () => {
  return (
    <VStack h="100vh" justify="center" align="center">
      <Text>お探しのページが見つかりませんでした。</Text>
      <Box>
        <Button colorScheme="blue" onClick={() => (window.location.href = '/')}>
          トップへ戻る
        </Button>
      </Box>
    </VStack>
  )
}
