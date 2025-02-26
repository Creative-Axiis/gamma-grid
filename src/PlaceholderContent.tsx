import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PlaceholderContentProps {
    title: string;
}

export default function PlaceholderContent({ title }: PlaceholderContentProps) {
    return (
        <Box sx={{ 
            margin: "24px",
            padding: "24px",
            background: "#FAFAFA",
            borderRadius: "16px",
            border: "1px solid #EAEAEA",
        }}>
            <Typography variant="h5" sx={{ color: "#101318" }}>
                {title} Dashboard
            </Typography>
            <Typography sx={{ color: "#7C818A", mt: 2 }}>
                This is a placeholder for the {title} section. Content coming soon...
            </Typography>
        </Box>
    );
}