import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const SearchContainerStyle = {
    height: "64px",
    width: "532px", // need to use 1440px
    // backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    paddingTop: "12px",
    paddingBottom: "12px",
};

export const SearchContainerInnerStyle = {
    height: "40px",
    width: "532px", // need to use 1440px
    backgroundColor: "#171717",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "12px 12px 12px 12px",
    borderRadius: "10px",
    border: "1px solid #303030",
};

export const SearchIconStyles = {
    // height: "32px",
    // width: "20px",
    // borderRadius: "8px",
    alignItems: "left",
    // justifyContent: "center",
    display: "flex",
    // cursor: "pointer",
    // border: "1px solid #E4F1FF",
};
export const SearchBoxInputStyles = {
    height: "16px",
    width: "100%",
    display: "flex",
};

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#9B9B9B",
    width: "100%",
    "& .MuiInputBase-input": {
        // padding: theme.spacing(1, 1, 1, 0),
        // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            // width: "12ch",
            "&:focus": {
                // width: "20ch",
            },
        },
    },
}));
export default function SearchContainer() {
    return (
        <Box sx={SearchContainerStyle}>
            <Box sx={SearchContainerInnerStyle}>
                <Icon sx={SearchIconStyles}>
                    <Box
                        component="img"
                        src="/icons/topBar/search.png"
                        alt="icon"
                        width="13px"
                        height="13px"
                    />
                </Icon>
                <Box sx={SearchBoxInputStyles}>
                    <StyledInputBase
                        placeholder="Search anything"
                        inputProps={{
                            "aria-label": "search",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
