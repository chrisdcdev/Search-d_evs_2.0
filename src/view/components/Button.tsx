import { Button } from '@chakra-ui/react';
import { Link } from "react-router-dom"
interface ButtonProps {
    title: string;
    search: () => void;
}

export default function ButtonSearch({ title, search }: ButtonProps) {
    return (
        <Link to={"/profile"}>
            <Button marginLeft="-30px" colorScheme="purple" size="lg" width={{ base: "200px", md: "200px", lg: "250px" }} onClick={() => search()}>{title}</Button>
        </Link>
    );
}