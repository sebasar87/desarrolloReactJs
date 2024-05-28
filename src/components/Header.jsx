import Navbar from "./Navbar"
import Myitems from "./Myitems"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNnwvLY_jN57bV8cbp_bsN90vIARN05pA",
    authDomain: "coder-ecommerce-3c156.firebaseapp.com",
    projectId: "coder-ecommerce-3c156",
    storageBucket: "coder-ecommerce-3c156.appspot.com",
    messagingSenderId: "1074561036013",
    appId: "1:1074561036013:web:7a53241dee614a824ce6e4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
function Header({ count, setCount }) {
    return (
        <>
            <Navbar count={count} setCount={setCount}/>            
            <Myitems greeting={"Hola, bienvenido al mundo del mañana "}/>           
        </>        
    )
}

export default Header