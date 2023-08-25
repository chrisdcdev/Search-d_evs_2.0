import { Box, Link } from "@chakra-ui/react"
import { ContactProps } from "../../model/Contact"

function Contact({ LinkBlog, TwitterLink }: ContactProps) {


  if (TwitterLink && LinkBlog) {
    return (
      <Box as="button"
        backgroundColor="#8C19D2"
        width="280px"
        height="48px"
        color="white"
        borderRadius="6px" padding="10px, 24px, 10px, 24px" fontSize="18px" fontWeight="600" fontFamily="body">
        <Link href={LinkBlog} isExternal>
          Contato
        </Link>
      </Box>
    );
  } else if (TwitterLink) {
    return (
      <Box as="button"
        backgroundColor="#8C19D2"
        width="280px"
        height="48px"
        color="white"
        borderRadius="6px" padding="10px, 24px, 10px, 24px" fontSize="18px" fontWeight="600" fontFamily="body">
        <Link href={`https://twitter.com/${TwitterLink}`} isExternal>
          Contato
        </Link>
      </Box>
    );
  } else if (LinkBlog && (typeof LinkBlog === 'string' ? LinkBlog : "").startsWith("http://") || (typeof LinkBlog === 'string' ? LinkBlog : "").startsWith("https://")) {
    return (
      <Box as="button"
        backgroundColor="#8C19D2"
        width="280px"
        height="48px"
        color="white"
        borderRadius="6px" padding="10px, 24px, 10px, 24px" fontSize="18px" fontWeight="600" fontFamily="body">
        <Link href={LinkBlog} isExternal>
          Blog
        </Link>
      </Box>
    );
  } else {
    return <></>
    
  }
}

export default Contact
