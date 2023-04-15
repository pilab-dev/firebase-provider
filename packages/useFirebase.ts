import { useContext } from "react"
import { firebaseContext } from "./FirebaseProvider"

export const useFirebase = () => {
    const ctx = useContext(firebaseContext);

    if (!ctx) {
        throw new Error('useFirebase must be wrapped with FirebaseProvider')
    }

    return ctx
}

export default useFirebase