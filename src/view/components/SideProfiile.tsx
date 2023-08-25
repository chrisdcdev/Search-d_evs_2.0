import { Box, Image, Link, Text } from '@chakra-ui/react';

import Following from '../../../public/assets/following.svg';
import Group from '../../../public/assets/Group.svg';
import LinkBlog from '../../../public/assets/link.svg';
import Office from '../../../public/assets/office.svg';
import Location from '../../../public/assets/pin.svg';
import Twitter from '../../../public/assets/Twitter.svg';
import { UserProfile } from '../../model/UserProfile';
import Contact from './Contact';
import InfoBio from './InfoBio';
import InfoBioLink from './InfoBioLink';
import Repositories from './Repositories';
import Title from './Title';
import { ArrowBackIcon } from '@chakra-ui/icons';
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
        <Box display="flex" flexDirection="column" >

            <Box marginLeft="10px" display={{ "sm": "none", "base": "hidden","md": "flex",  }} backgroundColor="#FCFCFC" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
                <Link display="flex" alignItems="center"  href="/" _hover={{
                    textDecoration: "none"
                }}>
                    <ArrowBackIcon marginLeft="10px" fontSize="32px" color="#0069CA"/>
                    <Title title="Search" sufix="d_evs" font="24px" />
                </Link>
            </Box>
            <Box display="flex"  backgroundColor={{"xl":"#FCFCFC", "md": "#FCFCFC", "sm":"#EADDFF99"}} flexDirection={{ "xl": "row", "md": "row", "sm": "column", "base": "column" }} borderEndRadius="4px" width={{ 'xl': "100%", 'lg': "100%" }} justifyContent={{ "xl": "space-around", "md": "space-around", "sm": "center" }} paddingTop={{ base: "none", md: "10px" }} boxSizing="border-box" >

                <Box>
                    <Box width={{ "xl": "280px", "md": "280px" }} borderRadius="4px" paddingLeft="5px" paddingRight="5px" display="flex" alignItems="flex-start" flexDirection="column" height="465px" backgroundColor={{ "xl": "#FFF", "md": "#FFF", "sm": "#EADDFF99", "base": "#EADDFF99" }}>
                        <Box width="250px" marginTop="24px" display="flex" alignItems="stretch" columnGap="16px">
                            <Box display="flex" alignItems="flex-start">
                                <Image src={avatar_url} borderRadius="full" width="58px" marginBottom="-5px" /> <></>
                            </Box>
                            <Box >
                                <Text fontSize="20px" as="b" height="24px" color="#171923" fontFamily="body">
                                    {name}
                                </Text>
                                <Text height="21px" fontSize="14px" color="#A0AEC0" fontFamily="body">
                                    @{login}
                                </Text>
                            </Box>
                        </Box>
                        <Box width="300px" height="50px" marginTop="16px" display={{md:"none", base:"flex"}} flexDirection="row" justifyContent="center" alignItems="center">
                                <InfoBio image={Group} content={followers} sufix="seguidores" />
                                <InfoBio image={Following} content={following} sufix="seguindo" />
                            </Box>
                        <Text fontSize="16px" width="250px" color="#4A5568" marginTop="16px" fontFamily="body" fontWeight="400">
                            {bio}
                        </Text>
                        <Box display="flex" flexDirection="column" marginTop="24px">
                            <Box width="300px" height="50px" display={{md:"flex", base:"none"}}  flexDirection="row" justifyContent="center" alignItems="center">
                                <InfoBio image={Group} content={followers} sufix="seguidores" />
                                <InfoBio image={Following} content={following} sufix="seguindo" />
                            </Box>
                            <InfoBio image={Office} content={company} sufix="" />
                            <InfoBio image={Location} content={location} sufix="" />
                            <InfoBioLink image={LinkBlog} content={blog} sufix="" />
                            <InfoBioLink image={Twitter} content={twitter_username} sufix="" />
                        </Box>
                    </Box>
                    <Box marginTop="40px" display={{ base: "none", md: "flex" }}>
                        <Contact LinkBlog={blog} TwitterLink={twitter_username} />
                    </Box>
                </Box>
                <Repositories />
            </Box>
        </Box>
    )
}

export default SideProfile