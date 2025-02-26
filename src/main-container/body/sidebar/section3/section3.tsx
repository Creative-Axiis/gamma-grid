import { Box, Collapse, Stack, Typography } from "@mui/material";
import { useCallback, useMemo, memo, useState } from "react";
import { useNavigation } from "../../../../NavigationContext";

// Types
interface DropdownItemProps {
    id: string;
    label: string;
    isOpen: boolean;
    subItems: string[];
    isHovered: boolean;
    onMouseEnter: (id: string) => void;
    onMouseLeave: () => void;
    onClick: (id: string) => void;
}

// Consolidated styles
const styles = {
    section: {
        height: "fit-content",
        width: "200px",
        display: "flex",
        position: "relative",
        margin: 0,
        boxSizing: "border-box",
        marginTop: "24px",
    },
    item: {
        width: "200px",
        height: "32px",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        position: "relative",
        margin: 0,
        boxSizing: "border-box",
        borderRadius: "8px",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer", // Add this line
    },
    icon: {
        width: "14px",
        height: "14px",
        transition: "transform 0.3s",
    },
    text: {
        paddingLeft: "8px",
        fontWeight: "500",
        fontSize: "13px",
        lineHeight: "16px",
        letterSpacing: "-0.01em",
        color: "#101318",
    },
    header: {
        padding: "8px",
        fontWeight: "600",
        fontSize: "11px",
        lineHeight: "13.31px",
        letterSpacing: "-0.01em",
        color: "#A1A1A1",
    },
    subItem: {
        paddingLeft: "30px",
    },
};

// Memoized dropdown item component

const DropdownItem = memo(
    ({
        id,
        label,
        isOpen,
        isHovered,
        subItems,
        onMouseEnter,
        onMouseLeave,
        onClick,
    }: DropdownItemProps) => {
        const { setActiveTab, activeTab } = useNavigation();
        const isSelected = activeTab === id;

        const icons = {
            dropdown: {
                default: "/icons/sideBar/dropdown.svg",
                white: "/icons/sideBar/dropdown_white.svg",
            },
        };

        return (
            <>
                <Box
                    sx={{
                        ...styles.item,
                        backgroundColor: isSelected ? "#5654D4" : "transparent",
                        "& .MuiTypography-root": {
                            color: isSelected ? "#FFFFFF" : "#101318",
                        },
                    }}
                    onClick={() => {
                        onClick(id);
                        setActiveTab(id);
                    }}
                    onMouseEnter={() => onMouseEnter(id)}
                    onMouseLeave={onMouseLeave}
                >
                    <Box
                        sx={{
                            ...styles.icon,
                            transform: isOpen
                                ? "rotate(90deg)"
                                : "rotate(0deg)",
                        }}
                        component="img"
                        src={isSelected ? icons.dropdown.white : icons.dropdown.default}
                        alt="icon"
                    />
                    <Typography sx={styles.text}>{label}</Typography>
                </Box>
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Stack direction="column" spacing={0}>
                        {subItems.map((item, index) => (
                            <Box
                                key={`${id}-${index}`}
                                sx={{ ...styles.item, ...styles.subItem }}
                            >
                                <Typography sx={styles.text}>{item}</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Collapse>
            </>
        );
    }
);

DropdownItem.displayName = "DropdownItem";

export default function Section3() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [openSection, setOpenSection] = useState<string | null>(null);

    const handleMouseEnter = useCallback((id: string) => {
        setHoveredItem(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    const handleClick = useCallback((id: string) => {
        setOpenSection((prev) => (prev === id ? null : id));
    }, []);

    const menuItems = useMemo(
        () => [
            {
                id: "landingPage",
                label: "Landing Page",
                subItems: ["Test 1", "Test 2", "Test 3"],
            },
            {
                id: "authentication",
                label: "Authentication",
                subItems: ["Test 1", "Test 2", "Test 3"],
            },
            {
                id: "error",
                label: "Error",
                subItems: ["Test 1", "Test 2", "Test 3"],
            },
            {
                id: "pricing",
                label: "Pricing",
                subItems: ["Test 1", "Test 2", "Test 3"],
            },
        ],
        []
    );

    return (
        <Box sx={styles.section}>
            <Stack direction="column" spacing={0}>
                <Box width="200px" height="29px">
                    <Typography sx={styles.header}>Pages</Typography>
                </Box>
                {menuItems.map((item) => (
                    <DropdownItem
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        isOpen={openSection === item.id}
                        isHovered={hoveredItem === item.id}
                        subItems={item.subItems}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                    />
                ))}
            </Stack>
        </Box>
    );
}
