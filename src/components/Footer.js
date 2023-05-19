import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div id="socials">
            <a href="https://github.com/andreaginn"> <FontAwesomeIcon id="faicon" icon={faGithub} /> </a>
            <a href="https://www.linkedin.com/in/andrea-ginn-a8018b243/"><FontAwesomeIcon id="faicon" icon={faLinkedin} /></a>
            <a href="https://instagram.com/andrearoseart?igshid=ZGUzMzM3NWJiOQ=="><FontAwesomeIcon id="faicon" icon={faInstagram} /></a>
        </div>
    );
}

export default Footer;