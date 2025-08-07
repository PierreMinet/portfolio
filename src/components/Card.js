import { AiOutlineArrowRight } from "react-icons/ai";

function Card(props) {
    return(
        <div className="card">
            <div className="card-image-wrapper">
                <img src={props.display.image} width={500} height={500} alt="Project 1" />
            </div>
            <h4>{props.display.name}</h4>
            <p>{props.display.description}</p>
            <a className="nav-button-dark"
                href={props.display.url}
                rel="noreferrer"
                target="_blank">View project<span style={{ marginLeft:'0.25rem' ,transform:'translateY(2.5px)'}}><AiOutlineArrowRight /></span>
            </a>
        </div>
    );
}

export default Card;