import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ricardo Lopes</Text>
          <Text color="gray.300" fontSize="small">
            ricllima@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Ricardo Lopes"
        src="https://avatars.githubusercontent.com/u/44032539?v=4"
      />
    </Flex>
  );
}
