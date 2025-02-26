import { red } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    typography: {
        fontFamily: ["Inter", "system-ui"].join(","),
    },
    palette: {
        primary: {
            main: "#5654D4",
        },
        secondary: {
            main: red[500],
        },
    },
});

export default theme;
