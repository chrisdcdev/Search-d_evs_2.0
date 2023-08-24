import { Box } from "@chakra-ui/react";
import Title from "../view/components/Title";
import Search from "../view/components/Search";

export default function Home() {
  return (
    <Box>
      <Box>
        <Title title="Search d_evs"/>
      </Box>
      <Search />
    </Box>
  );
}