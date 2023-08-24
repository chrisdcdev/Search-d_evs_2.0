import 'react-toastify/dist/ReactToastify.css';

import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Button from './Button';
//import Result from './Result';
import { GetByUserName } from '../../controller/GetUserNameController';
import { User } from '../../model/User';

const Search = () => {
    const [userName, setUsername] = useState<string>("");
    const [result, setResult] = useState<{ login: string }[]>([]);
    const getDataForUserName = async () => {
        try {
            const user = { name: userName }
            const data = await GetByUserName(user);
            console.log(data)
            console.log(result)
            redirectToProfile({name: userName});
            setResult(data);
        } catch (error) {
            console.log(error);
        }
    }

    const redirectToProfile = ({name}:User) => {
        window.location.href = `/profile/${name}`;
    }
    return (
        <Box>
            <Box display="flex" columnGap="-10px">
                <ToastContainer />
                <InputGroup >
                    <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' width="2xl" fontSize='x-large' />
                    </InputLeftElement>
                    <Input type="text" placeholder="Search" size="lg" width={{ base: "250px", md: "300px", lg: "550px" }} name="name" id="name" onChange={(event: ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value) }} />
                </InputGroup>
                <Button title={"Search"} search={() => getDataForUserName()} />
            </Box>
        </Box>
    )
}

export default Search