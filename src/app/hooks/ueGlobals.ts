import { createContext, useContext } from "react";
import { Member } from "../../lib/types/members";

interface GlobalInterface {
    authMember: (member: Member | null) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(undefined);

export const useGlobals = () => {
    const context = useContext(GlobalContext);
    if(context === undefined) throw new Error("useGlobals withitn Provider");
    return context;
}