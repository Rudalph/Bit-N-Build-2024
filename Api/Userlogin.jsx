import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../Components/firebase";
const login = (email,password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("Loggedin");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
}

export default login;