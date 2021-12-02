import { getAuth, signInWithPopup, signOut } from "@firebase/auth";
import { facebookProvider, googleProvider } from "../firebase/firebase";


export const login = (uid) => ({
    type: 'LOGIN',
    uid
});
export const startLoginWithGoogle = () => {
    return () => {
        return signInWithPopup(getAuth(), googleProvider)
    };
};

export const startLoginWithFacebook = () => {
    return () => {
        return signInWithPopup(getAuth(), facebookProvider)
    };
};

export const logout = () => ({
    type: 'LOGOUT',
})

export const startLogout = () => {
    return () => {
        return signOut(getAuth())
    };
};