import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const LogoStyle = {
    height: "100%",
    width: "208px", // need to use 1440px
    // backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "21px 11px 21px 0px",
    alignment: "left",
};

export const LogoPlusTextStyle = {
    height: "100%",
    width: "197px", // need to use 1440px
    // backgroundColor: "red",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    // padding: "26px 32px 26px 0px",
    alignment: "left",
};

export const IconStyles = {
    width: "12.26px",
    height: "14.3px",
    alignSelf: "center",
};
export const TextStyles = {
    // fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "18.3857px",
    fontWeight: "700",
    color: "#FFFFFF",
    paddingLeft: "4.09px",
    alignSelf: "left",
    lineHeight: "22px",
};

export default function Logo() {
    return (
        <Box sx={LogoStyle}>
            <Box sx={LogoPlusTextStyle}>
                <Box
                    sx={IconStyles}
                    component="img"
                    src="/icons/topBar/logo.png"
                    alt="icon"
                ></Box>
                <Typography  sx={TextStyles}>
                    Euphoria
                </Typography>
            </Box>
        </Box>
    );
}

