import { Avatar, Box, Text } from "@chakra-ui/react"
import { ResultProps } from "../../model/Result"



function Result({ avatar_url, name, bio }: ResultProps) {
    return (
        <Box display="flex" alignItems="stretch" boxShadow="base" borderRadius="md" padding="2" marginTop="10">
            <Box display="flex" >
                <Avatar size='lg' name={name} src={avatar_url} />
                <Box display="flex" marginLeft="2" flexDirection="column" alignItems="flex-start" justifyItems="center">
                    <Text fontSize="md">{name}</Text>

                    <Text fontSize="medium">{bio}</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Result