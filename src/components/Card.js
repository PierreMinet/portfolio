import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsHammer } from "react-icons/bs";
import { useContext } from "react";
import MenuContext from "../context/MenuContext";

function Card(props) {
    const { setMenuVisible } = useContext(MenuContext);
    return (
        <div className="card">
            <div className="card-image-wrapper">
                <img src={props.display.image} width={500} height={500} alt="Project 1" />
            </div>
            <h4>{props.display.name}</h4>
            <p>{props.display.description}</p>
            {props.display.released ? (
            <a className="nav-button-dark"
                href={props.display.url}
                rel="noreferrer"
                onClick={() => setMenuVisible(false)}
                target="_blank">View project<span style={{ marginLeft:'0.25rem' ,transform:'translateY(2.5px)'}}><AiOutlineArrowRight /></span>
            </a> ) : null }
            {props.display.released ? (
                <span className="status released">Finished<span className="status-icon"><BsCheckCircleFill /></span></span>
            ) : (
                <span className="status in-dev">In-dev<span className="status-icon"><BsHammer /></span></span>
            )}
            {props.display.discord ? (
                <a className="nav-button-dark"
                    href={props.display.discord}
                    rel="noreferrer"
                    target="_blank">
                        <span style={{ transform:'translateY(2.5px)', fontSize:"1.5rem"}}><BsDiscord /></span>
                </a>
            ) : null}
        </div>
    );
}

export default Card;