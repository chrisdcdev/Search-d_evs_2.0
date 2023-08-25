import { Box } from "@chakra-ui/react";
import Title from "../view/components/Title";
import Search from "../view/components/Search";
import { changeStatus } from "../store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const dispatch = useDispatch();
  function changeStatusUserInfo() {
    dispatch(changeStatus(false))
  }
  useEffect(() => {
    changeStatusUserInfo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Title title="Search" sufix="d_evs" font="6xl" />
      </Box>
      <Search />
    </Box>
  );
}