// lib
import { useState }                         from "react";
import { useMutation, useQueryClient }      from "@tanstack/react-query";

// Firebase
import { updateDeckTitle }                  from "../../firebase/accessData/updateDeckTitle";

//Components
import { ModalOverLay }                     from "../ModalOverlay/ModalOverlay";

// Zustand
import { useModalOverlay }                  from "../../store/useModalOverlay";

// CSS
import "./popupEditText.css";

export function PopupEditText(props) {
    const queryClient = useQueryClient();
    const { isModalOverlay, setIsModalOverlay } = useModalOverlay();
    const [popupInputValue, setPopupInputValue] = useState(props.card.value);

    function handleInputValue(ev) {
        const { value } = ev.target;
        setPopupInputValue(value);
    }

    const mutation = useMutation({
        mutationFn: ({ value, cardID }) => updateDeckTitle(value, cardID),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['decksNames']});
        }
    })

    function handleSaveChange() {
        mutation.mutate({
            value: popupInputValue,
            cardID:  props.card.cardID
        })

        setIsModalOverlay(!isModalOverlay);
    }

    return (
        <ModalOverLay>
            <div className="popup">
                <input type="text" value={popupInputValue} onChange={(ev) => handleInputValue(ev)} />

                <div className="popup-container-buttons">
                    <button className="popup-btn-cancel popup-btn" onClick={() => setIsModalOverlay(!isModalOverlay)}>cancel</button>
                    <button className="popup-btn-clean-up popup-btn"  onClick={() => setPopupInputValue("")}>clean up</button>
                    <button className="popup-btn-save popup-btn" onClick={() => handleSaveChange()}>save</button>
                </div>
            </div>
        </ModalOverLay>
    )
}