import './Pedals.css';
import FloodLoader from '../FloodLoader/FloodLoader';

function Pedals() {
    return (
        <div className='coming-soon'>
            <FloodLoader />
            <p>
                Floodlight brand pedals coming soon!
            </p>
        </div>
        // <div className="pedals">
        //     <p>
        //         These are my own takes on existing circuits.
        //         If you're interested in one of these, email me
        //         at <a href="mailto:floodlight.pedals@gmail.com">floodlight.pedals@gmail.com</a>.
        //     </p>
        //     <div className="grid-container">
        //     </div>
        // </div>
    );
}

export default Pedals;
