import { Box, Collapse, Stack, Typography } from "@mui/material";
import { useCallback, useMemo, memo, useState } from "react";
import { useNavigation } from "../../../../NavigationContext";


interface DropdownItemProps {
    id: string;
    label: string;
    isOpen: boolean;
    isHovered: boolean;
    subItems: string[];
    onMouseEnter: (id: string) => void;
    onMouseLeave: () => void;
    onClick: (id: string) => void;
}

// Styles
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
        cursor: "pointer",
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
    subItem: {
        padding: "8px 8px 8px 30px",
    },
    header: {
        padding: "8px",
        fontWeight: "600",
        fontSize: "11px",
        lineHeight: "13.31px",
        letterSpacing: "-0.01em",
        color: "#A1A1A1",
    },
};

// Memoized DropdownItem component
const DropdownItem = memo(({
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
                        color: isSelected ? "#FFFFFF" : "#101318"
                    }
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
                        transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
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
                        <Box key={`${id}-${index}`} sx={{ ...styles.item, ...styles.subItem }}>
                            <Typography sx={styles.text}>{item}</Typography>
                        </Box>
                    ))}
                </Stack>
            </Collapse>
        </>
    );
});

DropdownItem.displayName = "DropdownItem";

// Main component
export default function Section2() {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [openSection, setOpenSection] = useState<string | null>(null);

    const handleMouseEnter = useCallback((id: string) => {
        setHoveredItem(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredItem(null);
    }, []);

    const handleClick = useCallback((id: string) => {
        setOpenSection(prev => prev === id ? null : id);
    }, []);

    const menuItems = useMemo(() => [
        {
            id: "ecommerce",
            label: "E-commerce",
            subItems: ["Test 1", "Test 2", "Test 3"],
        },
        {
            id: "crm",
            label: "CRM",
            subItems: ["Test 1", "Test 2", "Test 3"],
        },
        {
            id: "projectManagement",
            label: "Project Management",
            subItems: ["Test 1", "Test 2", "Test 3"],
        },
        {
            id: "booking",
            label: "Booking",
            subItems: ["Test 1", "Test 2", "Test 3"],
        },
        {
            id: "kanban",
            label: "Kanban",
            subItems: ["Test 1", "Test 2", "Test 3"],
        },
        {
            id: "chat",
            label: "Chat",
            subItems: ["Test 1", "Test 2", "Test 3"],
        },
        {
            id: "calendar",
            label: "Calendar",
            subItems: ["Test 1", "Test 2", "Test 3"],
        },
    ], []);

    return (
        <Box sx={styles.section}>
            <Stack direction="column" spacing={0}>
                <Box width="200px" height="29px">
                    <Typography sx={styles.header}>Apps</Typography>
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
