import { Button } from '@chakra-ui/react';
interface ButtonProps {
    title: string;
    search: () => void;
}

export default function ButtonSearch({ title, search }: ButtonProps) {
    return (
            <Button marginLeft="-30px" colorScheme="purple" size="lg" width={{ base: "200px", md: "200px", lg: "250px" }} onClick={() => search()}>{title}</Button>
    );
}