import { createContext, useContext, useState, ReactNode } from 'react';

type NavigationContextType = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [activeTab, setActiveTab] = useState('analytics');

    return (
        <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
} 