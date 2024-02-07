import { Box, Divider, Image, Link, Text } from "@chakra-ui/react"
import Star from "../../../public/assets/Star.svg"
import { useSelector } from "react-redux";
import { AppState, UserState } from "../../store";
import { RepositoriesProps } from "../../model/Repositories";
import { useEffect, useState } from "react";
import { DateFormate } from "../../utils/FormateDate";
import Title from "./Title";

function Repositories() {
    const [repositories, setRepositories] = useState<RepositoriesProps[]>([]);
    const user = useSelector((state: AppState) => state.user);
    const status = useSelector((state: UserState) => state.status);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (currentPage > 0) {
            fetch(`https://api.github.com/users/${user}/repos?per_page=6&page=${currentPage}`)
                .then((response) => response.json())
                .then((newRepositories) => setRepositories((prevRepositories) => [...prevRepositories, ...newRepositories]))
                .catch((error) => {
                    console.error("Error fetching repositories:", error);
                });
        }
    }, [currentPage]);

    useEffect(() => {
        const intersextionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setCurrentPage((currentPageInsideState) => currentPageInsideState + 1);
            }
        })

        const sentinelElement = document.querySelector("#sentinel");

        if (sentinelElement) {
            intersextionObserver.observe(sentinelElement);
        }
    
        return () => {
            if (sentinelElement) {
                intersextionObserver.unobserve(sentinelElement);
            }
        };
    }, [])

    if (!status && !user) {

        window.location.href = "/"
        return <></>
    }

    return (
        <Box width={{ xl: "900px", lg: "500px", md: "420px", sm: "100%" }} overflow="auto" backgroundColor="#fff" height="50rem" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
            {repositories.length > 0 ?
                repositories && repositories?.map((content: RepositoriesProps) => {
                    return (
                        <Box key={content.id}>
                            <Box overflow="hidden" width={{ xl: "850px", md: "400px", sm: "400px", base: "300px" }}>
                                <Link href={content.clone_url} isExternal>
                                    <Text fontFamily="body" marginBottom="16px" marginTop="24px" fontSize="20px" fontWeight="700" color="#171923">{content.name}</Text>
                                </Link>
                                <Text fontSize="16px" textOverflow="ellipsis" marginBottom="17px" fontWeight="400" fontFamily="body" color="#4A5568" lineHeight="24px">{content.description}</Text>
                                <Box display="flex" columnGap="8px" marginBottom="16px">
                                    <span><Image src={Star} /></span> <p> {content.stargazers_count}  •  {DateFormate(content.updated_at)}</p>
                                </Box>
                            </Box>
                        </Box>
                    )
                }) :
                <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%">
                    <Title title="Sem" sufix="repositórios" font="3xl" />
                </Box>
            }
            <Divider color="red" width="100%" id="sentinel" marginBottom="1rem" />
        </Box>
    );
}

export default Repositories