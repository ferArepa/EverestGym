import Carrusel from "./carrusel";
import './carrusel.css'
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import { FaRunning } from "react-icons/fa";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';;
import { FaBaseballBatBall } from "react-icons/fa6";


function Section2() {
  

    return (
        <div className='section2'>
            <h2>Supera tus limites con Everest Gym</h2>
      <p>
      ¡Hoy es el día para superar tus límites! Recuerda que cada gota de sudor es un paso más hacia tus objetivos. La clave está en la persistencia y la disciplina. No importa cuán difícil parezca, cada entrenamiento cuenta.
      </p>
      
      <h3>Tipos de Entrenamientos Disponibles:</h3>
      <ul>
        <li><FitnessCenterIcon/>Sala de Pesas</li>
        <li><FaRunning/> Area de Crossfit</li>
        <li className="mma"><SportsMmaIcon/> Area de MMA</li>
        <li><FaBaseballBatBall/>Area de Beisbol</li>
      </ul>
      <div>
      <Carrusel/>
      </div>
      <div>
      </div>
        </div>


    );
}
export default Section2