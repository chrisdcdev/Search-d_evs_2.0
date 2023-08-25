import { Box, Text, Image, Link } from "@chakra-ui/react"
import { InfoBioProps } from "../../model/InfoBio"

function InfoBioLink({ image, content, sufix }: InfoBioProps) {
    console.log(image?.includes("Twitter"))
    return (
        <>
            {content === null || content === "" ? <></> :
                <Box display="flex" width="250px" marginBottom="8px" columnGap="8px" alignItems="center">
                    <span ><Image width="24px" src={image} alt="Icon group" /></span>
                    <Text fontSize="14px" color="#4A5568" fontFamily="body" fontWeight="400">
                        {image?.includes("Twitter") &&
                            <Link href={`https://twitter.com/${content}`} isExternal>
                                {content} {sufix}
                            </Link>}
                        {
                            typeof content === "string" && content?.includes("http") ||
                                typeof content === "string" && content?.includes("https") ? <Link href={`${content}`} isExternal>
                                {content} {sufix}
                            </Link> :
                                <Link href={`https://${content}`} isExternal>
                                    {content} {sufix}
                                </Link>
                        }
                    </Text>
                </Box>
            }
        </>
    )
}

export default InfoBioLink