import { Box } from "@chakra-ui/react";
import { TitleProps } from "../../model/Title";


export default function Title({ title, sufix,font }: TitleProps) {
    return (
        <Box display="flex" columnGap="16px">
            <Box
                textAlign="center"
                as="h1"
                fontFamily="heading"
                color="#0069CA"
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl", xl: `${font}` }}
                fontWeight="bold"
            >
                {title}
            </Box>
            <Box
                textAlign="center"
                as="h1"
                fontFamily="heading"
                color="#8C19D2"
                fontSize={{ base: "2xl", md: "4xl", lg: "6xl", xl: `${font}`  }}
                fontWeight="bold"
            >
                {sufix}
            </Box>

        </Box>
    );
}