import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { GetByUserName } from '../controller/GetUserNameController';
import { AppState } from '../store';
import { Box } from '@chakra-ui/react';
import SideProfile from '../view/components/SideProfiile';
import { UserProfile } from '../model/UserProfile';

export default function Profile() {
  const user = useSelector((state: AppState) => state.user);

  const GetDataForByUserName = async () => {
    try {
      const getForUser = { name: user };
      const data = await GetByUserName(getForUser);
      return data || {}; // Retorna um objeto vazio se data for null ou undefined
    } catch (error) {
      console.log("error:", error);
      return {}; // Retorna um objeto vazio em caso de erro
    }
  };

  const { data, isLoading, error } = useQuery('data', GetDataForByUserName, {
    enabled: !!user,
  });

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro</div>;
  }

  if (!data) {
    return null; // Ou qualquer outra ação apropriada
  }

  const content = [data];

  return (
    <Box>
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
