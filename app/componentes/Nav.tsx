import "./nav.css";
export default function Nav () {
    return (

        /* Es una mala práctica poner el logo dentro de la ul? */
        <nav >
            
            <ul className="navLista">
            <h3 className="logo">Logo</h3>
            <li className="navItem">Inicio</li>
            <li className="navItem">Promos</li>
            <li className="navItem">Nosotros</li>
        </ul>

        </nav>
        
    )
}