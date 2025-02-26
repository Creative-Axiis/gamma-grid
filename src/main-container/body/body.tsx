import Box from "@mui/material/Box";
import SideBar from "./sidebar/sidebar";
import ContentContainer from "./content-container/content-container";
import useMediaQuery from "@mui/material/useMediaQuery";

export const BodyStyle = {
    // background: "#FFFFFF",
    background: "black",
    height: "fit-content",
    width: "100%", // need to use 1440px
    // backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "fixed", // Keep it relative to ensure scrolling
    marginTop: "80px", // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    borderRadius: "30px 30px 0px 0px",
    // padding: "8px 24px 8px 24px",
    overflow: "hidden", // Add this to prevent overflow of child elements
};

interface BodyProps {
    sidebarOpen: boolean;
}
export default function Body({ sidebarOpen }: BodyProps) {
    const isMobile = useMediaQuery("(max-width:1057px)");

    return (
        <Box sx={BodyStyle}>
            {/* Show SideBar based on screen size or sidebarOpen state */}
            {!isMobile && <SideBar />}
            {isMobile && sidebarOpen && <SideBar />} {/* For mobile screens */}
            <ContentContainer />
        </Box>
    );
}
