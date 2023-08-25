import { Box, Divider, Image, Text } from "@chakra-ui/react"
import Star from "../../../public/assets/Star.svg"
import { useEffect } from "react";
function Repositories() {

    useEffect(() => {


    }, []);

    return (
        <Box width="900px" backgroundColor="#FFF" height="50rem" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">

            <Box width="850px">
                <Text fontFamily="body" marginBottom="16px" marginTop="24px" fontSize="20px" fontWeight="700" color="#171923">Repositório nome</Text>
                <Text fontSize="16px" marginBottom="17px" fontWeight="400" fontFamily="body" color="#4A5568" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</Text>
                <Box display="flex" columnGap="8px" marginBottom="16px">
                    <span><Image src={Star} /></span> <p> 100  •  Atualizado há 2 dias</p>
                </Box>
                <Divider backgroundColor="#E2E8F0" width="850px" />
            </Box>
            <Box width="850px">
                <Text fontFamily="body" marginBottom="16px" marginTop="24px" fontSize="20px" fontWeight="700" color="#171923">Repositório nome</Text>
                <Text fontSize="16px" marginBottom="17px" fontWeight="400" fontFamily="body" color="#4A5568" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</Text>
                <Box display="flex" columnGap="8px" marginBottom="16px">
                    <span><Image src={Star} /></span> <p> 100  •  Atualizado há 2 dias</p>
                </Box>
                <Divider backgroundColor="#E2E8F0" width="850px" />
            </Box>
            <Box width="850px">
                <Text fontFamily="body" marginBottom="16px" marginTop="24px" fontSize="20px" fontWeight="700" color="#171923">Repositório nome</Text>
                <Text fontSize="16px" marginBottom="17px" fontWeight="400" fontFamily="body" color="#4A5568" lineHeight="24px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</Text>
                <Box display="flex" columnGap="8px" marginBottom="16px">
                    <span><Image src={Star} /></span> <p> 100  •  Atualizado há 2 dias</p>
                </Box>
                <Divider backgroundColor="#E2E8F0" width="850px" />
            </Box>
        </Box>
    )
}

export default Repositories