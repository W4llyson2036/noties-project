// Zustand
import { useModalOverlay }              from "../../store/useModalOverlay";

// CSS
import "./modalOverLay.css";

export function ModalOverLay(props) {
    const { isModalOverlay, setIsModalOverlay } = useModalOverlay();
    
    return (
        <div className="modal-edit-text" onClick={(ev) => {
            if (ev.target.className == "modal-edit-text") {
                    console.log("fun ModalOverLay()");
                    setIsModalOverlay(!isModalOverlay);
                }
        } }>
            {props.children}
       </div>
    )
}