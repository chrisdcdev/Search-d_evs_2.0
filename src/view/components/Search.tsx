import 'react-toastify/dist/ReactToastify.css';

import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { GetByUserName } from '../../controller/GetUserNameController';
import { setUser } from '../../store';
import Button from './Button';

const Search = () => {
    useEffect(()=> {
        dispatch(setUser(""))
    },[])

    const [userName, setUsername] = useState<string>("");
    const dispatch = useDispatch();
    const getDataForUserName = async () => {
        try {
            const user = { name: userName }
            const data = await GetByUserName(user);
            if (data) {
                dispatch(setUser(data.login))

            }
        } catch (error) {
            console.log("error");
        }
    }

    return (
        <Box alignItems="center" justifyContent="center">
            <Box display="flex" flexDirection={{base:"column", md:"column", lg:"row"}} alignItems="center" rowGap="16px" columnGap="-10px">
                <ToastContainer/>
                <InputGroup >
                    <InputLeftElement pointerEvents='none' >
                        <Search2Icon position="absolute" top="12px" color='gray.300' width="2xl" fontSize='x-large' />
                    </InputLeftElement>
                    <Input type="text" placeholder="Search" size="lg" width={{ base: "350px", md: "350px", lg: "550px" }} name="name" id="name" onChange={(event: ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value) }} />
                </InputGroup>
                <Button title={"Search"} search={() => getDataForUserName()} />
            </Box>
        </Box>
    )
}

export default Search