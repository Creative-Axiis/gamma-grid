import { useState } from "react";
import Body from "./main-container/body/body";
import TopBar from "./main-container/top-bar/top-bar";
import { NavigationProvider } from "./NavigationContext";

/**
 * Represents the main application component.
 */
function App() {
    // Lift the state to App component
    const [sidebarOpen, setSidebarOpen] = useState(false);

    /**
     * Toggles the visibility of the sidebar.
     */
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
    };
    return (
        <NavigationProvider>
            <TopBar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <Body sidebarOpen={sidebarOpen} />
        </NavigationProvider>
    );
}

export default App;
