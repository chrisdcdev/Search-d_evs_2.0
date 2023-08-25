import { Box, Text, Image, Link } from "@chakra-ui/react"
import { InfoBioLinkProps } from "../../model/InfoBioLink"

function InfoBioLink({ image, content, sufix }: InfoBioLinkProps) {
    return (
        <>
            {content === null || content === "" ? <></> :
                <Box display="flex" width="250px" marginBottom="8px" columnGap="8px" alignItems="center">
                    <span ><Image width="24px" src={image} alt="Icon group" /></span>
                    <Text fontSize="14px" color="#4A5568" fontFamily="body" fontWeight="400" css={{
                        wordBreak: "break-word"
                    }}>
                        
                        {
                            image?.includes("Twitter") ? (
                                <Link href={`https://twitter.com/${content}`} isExternal>
                                    {content} {sufix}
                                </Link>
                            ) : (
                                <Link href={(typeof content === 'string' ? content : "")?.startsWith("http://") || (typeof content === 'string' ? content : "")?.startsWith("https://") ? content : `https://${content}`} isExternal>
                                {content} {sufix}
                              </Link>
                            )
                        }

                    </Text>
                </Box>
            }
        </>
    )
}

export default InfoBioLink