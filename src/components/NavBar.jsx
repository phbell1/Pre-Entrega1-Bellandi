import './NavBar.css';
import ListaComponente from "./ListaComponente";

export default function NavBar() {
    return (
        <>
            <ListaComponente seccion="Inicio" />
            <ListaComponente seccion="Plantas Interior" />
            <ListaComponente seccion="Plantas Exterior" />
            <ListaComponente seccion="Maceteria" />
            <ListaComponente seccion="Contacto" />
        </>
    );
}


