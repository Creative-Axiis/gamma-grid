import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export const RightBarStyle = {
    height: "100%",
    width: "208px", // need to use 1440px
    // backgroundColor: "white",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    alignment: "right",
    paddingTop: "16px",
    paddingBottom: "16px",
    marginLeft: "auto", // Push RightBar to the far right
};

export const RightBarInnerStyle = {
    height: "32px",
    width: "208px", // need to use 1440px
    // backgroundColor: "red",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    margin: 0, // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    alignment: "right",
};
export const RightIconButtonStyles = {
    height: "32px",
    width: "20px",
    // borderRadius: "8px",
    alignItems: "left",
    // justifyContent: "center",
    display: "flex",
    cursor: "pointer",
    // border: "1px solid #E4F1FF",
};

export default function RightBar() {
    return (
        <Box sx={RightBarStyle}>
            <Box sx={RightBarInnerStyle}>
                <Tooltip title="world">
                    <IconButton sx={RightIconButtonStyles}>
                        <Box
                            component="img"
                            src="/icons/topBar/world.png"
                            alt="icon"
                            width="20px"
                            height="20px"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="sun">
                    <IconButton
                        sx={{
                            ...RightIconButtonStyles,
                            marginLeft: "24px",
                        }}
                    >
                        <Box
                            component="img"
                            src="/icons/topBar/sun.png"
                            alt="icon"
                            width="20px"
                            height="20px"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="notification">
                    <IconButton
                        sx={{
                            ...RightIconButtonStyles,
                            marginLeft: "24px",
                        }}
                    >
                        <Box
                            component="img"
                            src="/icons/topBar/notification.png"
                            alt="icon"
                            width="20px"
                            height="20px"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="settings">
                    <IconButton
                        sx={{
                            ...RightIconButtonStyles,
                            marginLeft: "24px",
                        }}
                    >
                        <Box
                            component="img"
                            src="/icons/topBar/settings.png"
                            alt="icon"
                            width="20px"
                            height="20px"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="avatar">
                    <IconButton
                        sx={{
                            ...RightIconButtonStyles,
                            marginLeft: "24px",
                        }}
                    >
                        <Box
                            component="img"
                            src="/icons/topBar/avatar.png"
                            alt="icon"
                            width="37.6px"
                            height="37.6px"
                            borderRadius="6.4px"
                        />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    );
}
