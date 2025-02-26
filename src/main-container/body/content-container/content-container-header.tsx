import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export const ContentContainerHeaderStyle = {
    height: "50px",
    width: "100%", // need to use 1440px
    background: "#FFFFFF",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    // marginLeft: "232px", // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "16px 24px 16px 24px",
    // overflowY: "auto", // Enable vertical scrolling
    // zIndex: 999, // Ensure it's above other content
    borderRadius: "0px 30px 0px 0px",
    border: "1px solid #EAEAEA",
    top: 0,
    left: 0,

};

/**
 * A header component for the content container.
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.HeaderName - The name to display in the header.
 */
export default function ContentContainerHeader({ HeaderName }: { HeaderName: string }) {


    return (
        <Box sx={ContentContainerHeaderStyle}>
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>{HeaderName}</Typography>

        </Box>
    );
}
