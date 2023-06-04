import './FloatingEmailButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function FloatingEmailButton() {
    return (
        <a id="fab" href="mailto:floodlight.pedals@gmail.com">
            <FontAwesomeIcon
                icon={faEnvelope}
                size='3x'
                id='fab-icon'
            />
        </a>
    );
}

export default FloatingEmailButton;
