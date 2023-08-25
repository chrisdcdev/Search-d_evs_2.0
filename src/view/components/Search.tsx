import 'react-toastify/dist/ReactToastify.css';

import { Search2Icon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { GetByUserName } from '../../controller/GetUserNameController';
import { setUser } from '../../store';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    useEffect(() => {
        dispatch(setUser(""))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [userName, setUsername] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getDataForUserName = async () => {

        const data = await GetByUserName(userName);
        if (data) {
            dispatch(setUser(data.login))
            navigate("/profile")

        }
    }

    return (
        <Box alignItems="center" justifyContent="center">
            <Box display="flex" flexDirection={{ base: "column", md: "column", lg: "row" }} alignItems="center" rowGap="16px" columnGap="-10px">
                <ToastContainer />
                <InputGroup >
                    <InputLeftElement pointerEvents='none' >
                        <Search2Icon position="absolute" top="12px" color='gray.300' width="20px" fontSize='x-large' />
                    </InputLeftElement>
                    <Input type="text" placeholder="Search" size="lg" width={{ base: "100%", md: "350px", lg: "550px", "sm": "300px" }} name="name" id="name" onChange={(event: ChangeEvent<HTMLInputElement>) => { setUsername(event.target.value) }} />
                </InputGroup>
                <Button title={"Search"} search={() => getDataForUserName()} />
            </Box>
        </Box>
    )
}

export default Search