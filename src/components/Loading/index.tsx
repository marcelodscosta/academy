import { HStack, Spinner, Text } from '@gluestack-ui/themed';

export function Loading() {
  return (
    <HStack justifyContent='center' alignItems='center' gap={5}>
      <Text>Carregando</Text>
      <Spinner
        color="$emerald600"
        size={'large'}
      />
    </HStack>
  )
}