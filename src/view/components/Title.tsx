import { Box } from "@chakra-ui/react";
import { TitleProps } from "../../model/Title";


export default function Title({ title }: TitleProps) {
    return (
        <Box
            textAlign="center"
            as="h1"
            fontFamily="Nunito"
            bgGradient="linear(to-r, #0069CA,#0069CA,#8C19D2,#8C19D2)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="bold"
        >
            {title}
        </Box>

    );
}