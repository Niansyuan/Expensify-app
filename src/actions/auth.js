import { getAuth, signInWithPopup, signOut } from "@firebase/auth";
import { googleProvider } from "../firebase/firebase";


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});
export const startLogin = () => {
    return () => {
        return signInWithPopup(getAuth(), googleProvider)
    }
};

export const logout = () => ({
    type: 'LOGOUT',
})

export const startLogout = () => {
    return () => {
        return signOut(getAuth())
    };
};