import Box from "@mui/material/Box";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";
import Section3 from "./section3/section3";
import { Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const SidebarStyle = {
    height: "100vh", // Full height of the viewport
    // width: "232px",
    position: "fixed", // Fix position to keep it on the screen
    top: 0, // Align it to the top of the viewport
    left: 0, // Align it to the left of the screen
    display: "flex",
    flexDirection: "column",
    // marginBottom: "180px",
    marginTop: "80px",
    boxSizing: "border-box",
    padding: "32px 16px 200px 16px",
    backgroundColor: "#FAFAFA",
    border: "1px solid #EAEAEA",
    overflowY: "auto", // Enable vertical scrolling
    zIndex: 1000, // Ensure it's above other content
    //borderRadius: "30px 0px 0px 0px",

    // Custom scrollbar for WebKit browsers (Chrome, Safari)
    "&::-webkit-scrollbar": {
        width: "4px", // Width of the scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#F1F1F1", // Scrollbar thumb color
        borderRadius: "10px", // Make the scrollbar rounded
    },
    "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#F1F1F1", // Thumb color on hover
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#F1F1F1", // Scrollbar track background
    },
    // Custom scrollbar for Firefox
    scrollbarWidth: "thin", // Width of the scrollbar
    scrollbarColor: "#F1F1F1 #F1F1F1", // Thumb and track color
};

export default function SideBar() {
    const isMobile = useMediaQuery("(max-width:1057px)");
    return (
        <Box borderRadius={isMobile ? "30px 30px 0px 0px" : "30px 0px 0px 0px"} width={isMobile ? "100%" : "232px"} sx={SidebarStyle}>

            <Stack direction="column" spacing={0}>
                <Section1 />
            </Stack>
        </Box>
    );
}
