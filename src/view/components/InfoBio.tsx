import { Box, Image, Text } from '@chakra-ui/react';

import { InfoBioProps } from '../../model/InfoBio';

function InfoBio({ image, content, sufix }: InfoBioProps) {
    return (
        <>
            {content === null || content === "" ? <></> :
                <Box display="flex" width="250px" marginBottom="8px" _first={{
                    marginT: "25px",
                    marginBottom: "10px"
                }} columnGap="8px" alignItems="center" css={() => ({
                    ":nth-child(2)": {
                        marginBottom: "24px",
                    },
                })}>
                    <span ><Image width="24px" src={image} alt="Icon group" /></span>
                    <Text fontSize="14px" color="#4A5568" fontFamily="body" fontWeight="400">
                        {content} {sufix}
                    </Text>

                </Box>
            }
        </>
    )
}

export default InfoBio