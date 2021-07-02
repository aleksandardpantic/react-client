
import { useState } from "react";
import Korisnik from "../Korisnik";

const useGlobalState = () => {
    const [state, setState] = useState({korisnik: Korisnik, list: []});
    const actions = (action) => {
        const {type, payload} = action;
        switch (type) {
            case 'setState':
                return setState(payload)
                
        
            default:
                return state;
        }
    }
    return {state, actions};
}
export default useGlobalState