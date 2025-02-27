import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import ContentContainerHeader from "./content-container-header";

import { Stack, SxProps } from "@mui/system";
import PlaceholderContent from "../../../PlaceholderContent";
import { useNavigation } from "../../../NavigationContext";

export const ContentContainerStyle: SxProps = {
    height: "100vh",
    width: "100%", // need to use 1440px
    background: "#FFFFFF",
    // position: "fixed",
    display: "flex",
    position: "relative", // Keep it relative to ensure scrolling
    // marginLeft: "232px", // Remove all margins
    boxSizing: "border-box", // Include padding and border in element's width and height
    padding: "0px 0px 200px 0px",
    alignment: "left",
    overflowY: "auto", // Enable vertical scrolling
    zIndex: 999, // Ensure it's above other content
    borderRadius: "0px 30px 0px 0px",

    // Custom scrollbar for WebKit browsers (Chrome, Safari)
    "&::-webkit-scrollbar": {
        width: "4px", // Width of the scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#888", // Scrollbar thumb color
        borderRadius: "10px", // Make the scrollbar rounded
    },
    "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555", // Thumb color on hover
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "#f1f1f1", // Scrollbar track background
    },
};

export default function ContentContainer() {
    const { activeTab } = useNavigation();

    const isMobile = useMediaQuery("(max-width:1057px)");
    const containerStyle = {
        ...(ContentContainerStyle as SxProps),
        marginLeft: isMobile ? "0px" : "232px",
    };

    // Section 1 routes
    const section1Routes = {
        section1_analytics: "Analytics",
        section1_ecommerce: "E-commerce",
        section1_finance: "Finance",
        section1_stockMarket: "Stock Market",
        section1_crm: "CRM",
        section1_projectManagement: "Project Management",
        section1_booking: "Booking",
        section1_crypto: "Crypto",
    };

    const renderContent = () => {
        // Check all sections for the active tab
        const title =
            (section1Routes as Record<string, string>)[activeTab] ||
            "Unknown";

        return <PlaceholderContent title={title} />;
    };

    return (
        <Box sx={containerStyle}>
            <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
                <ContentContainerHeader
                    HeaderName={
                        (section1Routes as Record<string, string>)[activeTab] ||
                        "Unknown"
                    }
                />
                {renderContent()}
            </Stack>
        </Box>
    );
}
