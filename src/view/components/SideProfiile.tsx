import { Box, Image, Text } from "@chakra-ui/react"
import { UserProfile } from "../../model/UserProfile"
import Group from "../../../public/assets/Group.svg"
import Following from "../../../public/assets/following.svg"
import Link from "../../../public/assets/link.svg"
import Location from "../../../public/assets/pin.svg"
import Twitter from "../../../public/assets/Twitter.svg"
import Office from "../../../public/assets/office.svg"
import InfoBio from "./InfoBio"
import InfoBioLink from "./InfoBioLink"
import Contact from "./Contact"
import Repositories from "./Repositories"

function SideProfile({
    avatar_url,
    name,
    login,
    bio,
    followers,
    following, company,
    location,
    blog,
    twitter_username
}: UserProfile) {
    return (
        <Box display="flex" backgroundColor="red" flexDirection="row" width="100%" justifyContent="space-around" padding="10px" boxSizing="border-box" >
            <Box>
                <Box width="280px" borderRadius="4px" display="flex" alignItems="center" flexDirection="column" height="465px" backgroundColor="#FFF">
                    <Box width="250px" marginTop="24px" display="flex" alignItems="stretch" columnGap="16px">
                        <Box display="flex" alignItems="flex-start">
                            <Image src={avatar_url} borderRadius="full" width="58px" marginBottom="-5px" />: <></>
                        </Box>
                        <Box>
                            <Text fontSize="20px" as="b" height="24px" color="#171923" fontFamily="body">
                                {name}
                            </Text>
                            <Text height="21px" fontSize="14px" color="#A0AEC0" fontFamily="body">
                                @{login}
                            </Text>
                        </Box>
                    </Box>
                    <Text fontSize="16px" width="250px" color="#4A5568" marginTop="16px" fontFamily="body" fontWeight="400">
                        {bio}
                    </Text>
                    <Box display="flex" flexDirection="column" marginTop="24px">
                        <InfoBio image={Group} content={followers} sufix="seguidores" />
                        <InfoBio image={Following} content={following} sufix="seguindo" />
                        <InfoBio image={Office} content={company} sufix="" />
                        <InfoBio image={Location} content={location} sufix="" />
                        <InfoBioLink image={Link} content={blog} sufix="" />
                        <InfoBioLink image={Twitter} content={twitter_username} sufix="" />
                    </Box>
                </Box>
                <Box marginTop="40px">
                    <Contact />
                </Box>
            </Box>

            <Repositories/>

        </Box>
    )
}

export default SideProfile