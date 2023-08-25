import { Box, Divider, Image, Link, Text } from "@chakra-ui/react"
import Star from "../../../public/assets/Star.svg"
import { useSelector } from "react-redux";
import { AppState, UserState } from "../../store";
import { GetByUserRepositories } from "../../controller/GetRepositoriesController";
import { RepositoriesProps } from "../../model/Repositories";
import { useEffect, useState } from "react";
import { DateFormate } from "../../utils/FormateDate";
import Title from "./Title";

function Repositories() {
    const [repositories, setRepositories] = useState<RepositoriesProps[]>([]);
    const user = useSelector((state: AppState) => state.user);
    const status = useSelector((state: UserState) => state.status);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const GetDataByrepo = async () => {
        const data = await GetByUserRepositories(user);

        setRepositories(data);


    };
    useEffect(() => {
        GetDataByrepo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!status && !user) {

        window.location.href = "/"
        return <></>
    }

    return (
        <Box width={{xl:"900px",lg:"500px", md:"420px",sm:"100%"}} overflow="auto" backgroundColor="#fff" height="50rem" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
            {repositories.length > 0 ?
                repositories && repositories?.map((content: RepositoriesProps) => {
                    return (
                        <Box key={content.id}>
                            <Box overflow="hidden" width={{xl:"850px", md:"400px", sm:"400px", base: "300px"}}>
                                <Link href={content.clone_url} isExternal>
                                    <Text fontFamily="body" marginBottom="16px" marginTop="24px" fontSize="20px" fontWeight="700" color="#171923">{content.name}</Text>
                                </Link>
                                <Text fontSize="16px" textOverflow="ellipsis" marginBottom="17px" fontWeight="400" fontFamily="body" color="#4A5568" lineHeight="24px">{content.description}</Text>
                                <Box display="flex" columnGap="8px" marginBottom="16px">
                                    <span><Image src={Star} /></span> <p> {content.stargazers_count}  •  {DateFormate(content.updated_at)}</p>
                                </Box>
                                <Divider backgroundColor="#E2E8F0" width="850px" />
                            </Box>
                        </Box>

                    )
                }) :
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                    <Title title="Sem" sufix="repositórios" font="3xl" />
                </Box>
            }
        </Box>
    )
}

export default Repositories