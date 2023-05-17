import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import pepe from "../../assets/pepe.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";

function MainHeader() {
<<<<<<< HEAD
  //redux state값 가져오기
  const nickname = useSelector((state) => state.mainReducer.nickname);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    LogoutBtn.logout();
  };
=======
>>>>>>> 10dcfc51b2ec7e229511ee3da8e078be6af4bf6e
  return (
    <AppBar
      elevation={0}
      position="relative"
      // variant="outlined"
      style={{
        backgroundColor: "transparent",
        height: "50px",
        boxShadow: "none",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "black",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <img
              src={pepe}
              alt=""
              style={{
                borderRadius: "50%",
                marginRight: "10px",
                width: "3%",
              }}
            /> */}
            <div
              style={{
                color: "black",
                fontFamily: "gmarket",
                marginRight: "2%",
              }}
            >
              {nickname}님, 환영합니다!
            </div>
            <LogoutBtn />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainHeader;
