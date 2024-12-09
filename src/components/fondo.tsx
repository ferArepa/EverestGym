
import './fondo.css'
import Section1 from './sections/section1'
import Section2 from './sections/section2'
import Section3 from './sections/section3'
import Section4 from './sections/section4'
import Section5 from './sections/section5'
function Fondo() {

    return (
        <div>
            <div className="fondobox">
                <Section1></Section1>
                <img className="fondoimg" src="src\imagenes\fondo1.jpg" alt="" />
            </div>
            <div className="fondobox">
                <Section2></Section2>
            </div>
            <div className="fondobox">
                <Section3></Section3>
            </div>
            <div className="fondobox">
                <Section4></Section4>
            </div>
            <div className="fondobox">
                <Section5></Section5>
            </div>
        </div>
    )
}
export default Fondo