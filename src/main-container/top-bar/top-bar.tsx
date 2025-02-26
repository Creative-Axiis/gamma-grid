import Box from "@mui/material/Box";
import Logo from "./logo/logo";
import RightBar from "./right-bar/right-bar";
import SearchContainer from "./search-container/search-container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";

export const TopBarStyle = {
    background: "black",
    height: "80px",
    width: "100%", // or "1440px" if you want a fixed width
    display: "flex",
    position: "fixed", // Change this to fixed to keep it in place while scrolling
    top: 0, // Ensure it's at the top of the viewport
    zIndex: 1000, // Add a high z-index to make sure it stays on top of other elements
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "8px 24px 8px 24px",
};

export const MiddleBoxStyles = {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
};

interface TopBarProps {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
}

export default function TopBar({ sidebarOpen, toggleSidebar }: TopBarProps) {
    const isMobile = useMediaQuery("(max-width:1057px)");

    return (
        <Box sx={TopBarStyle}>
            {/* Left Section: Show Logo or MenuIcon based on screen size */}
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleSidebar}
                sx={{ display: { md: "none" } }}
            >
                {sidebarOpen ? (
                    <CloseIcon sx={{ color: "#fff", height: "20px", width: "20px" }} />
                ) : (
                    <MenuIcon sx={{ color: "#fff", height: "20px", width: "20px" }} />
                )}
            </IconButton>
            {!isMobile && <Logo />}
            {/* Middle Section and Search Bar: Hidden on mobile */}
            {!isMobile && (
                <>
                    <Box sx={MiddleBoxStyles}></Box>
                    <SearchContainer />
                    <Box sx={MiddleBoxStyles}></Box>
                </>
            )}
            <RightBar />
        </Box>
    );
}
