import { Box, Skeleton, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { GetByUserName } from '../controller/GetUserNameController';
import { UserProfile } from '../model/UserProfile';
import { AppState, changeStatus } from '../store';
import SideProfile from '../view/components/SideProfiile';
import { useDispatch } from 'react-redux';
export default function Profile() {

  const dispatch = useDispatch();
  function changeStatusUserInfo() {
    dispatch(changeStatus(true))
  }

  const user = useSelector((state: AppState) => state.user);
  const GetDataForByUserName = async () => {
    try {
      const data = await GetByUserName(user);
      changeStatusUserInfo();
      return data || {};
    } catch (error) {
      return {};
    }
  };


  const { data, isLoading, error } = useQuery('data', GetDataForByUserName, {
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <Box display="flex" backgroundColor="#DDD" flexDirection="row" width="100%" justifyContent="space-around" padding="10px" boxSizing="border-box" >
        <Box >
          <Stack>
            <Skeleton height='465px' width="280px" />
          </Stack>
          <Stack>
            <Skeleton height='800px' width="904px" />
          </Stack>
        </Box>
      </Box>
    )
  }

  if (error) {
    return <div>Ocorreu um erro</div>;
  }

  if (!data) {

    return <div>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        as="h1"
        fontFamily="heading"
        bgGradient="linear(to-r, #0069CA, #0069CA, #8C19D2, #8C19D2)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="bold"
      >
        Sem dados para exibir.
      </Box>
    </div>;
  }


  const content = [data];

  return (
    <Box >
      {content?.map((data: UserProfile) => {
        const avatarUrl = data.avatar_url || '';
        return (
          <SideProfile
            key={data.login}
            avatar_url={avatarUrl}
            name={data.name}
            login={data.login}
            bio={data.bio}
            followers={data.followers}
            following={data.following}
            company={data.company}
            location={data.location}
            blog={data.blog}
            twitter_username={data.twitter_username}
          />
        );
      })}
    </Box>
  );
}
