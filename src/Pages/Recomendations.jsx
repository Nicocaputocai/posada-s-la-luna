import logo from "./assets/logo3.jpg"
import FloatingWhatsApp from 'react-floating-whatsapp'
const Recomendations = () =>{

    return (
        <>
        <p>Recomendaciones</p>
        <FloatingWhatsApp 
        phoneNumber="5491156536531"
        accountName="Posada Siguiendo la luna"
        avatar={logo}
        statusMessage=""
        chatMessage="Hola 👋🏽 ¿En que podemos ayudarte?"
        placeholder="Escriba su mensaje"
        darkMode="true"
        allowClickAway="true"
        allowEsc= "true"
        />
        </>
    );
};

export default Recomendations