// Lib
import { useQueryClient }           from "@tanstack/react-query";

// Components
import { ModalOverLay }             from "../../../components/ModalOverlay/ModalOverlay";

// Zustand
import { useModalOverlay }          from "../../../store/useModalOverlay";
import { useHoldCardIdToDelete }    from "../../../store/useHoldCardIdToDelete";

// Firebase
import { deleteCard }               from "../../../firebase/accessData/deleteCard";

// CSS
import "./deleteCardPopup.css";

export function DeleteCardPopup() {
    const queryClient = useQueryClient();

    // Zustand
    const { isModalOverlay, setIsModalOverlay } = useModalOverlay();
    const { cardIdToDelete } = useHoldCardIdToDelete();

    const queryData = queryClient.getQueryData(['allCards']);

    return (
        <ModalOverLay>
            <div className="container-delete-popup">
                <p>Are you sure you want to delete the card?</p>
                
                <div>
                    <button className="btn-confirm" onClick={() => {
                        setIsModalOverlay(!isModalOverlay);
                        
                        queryData.forEach((card, index) => {
                            if (card.id == cardIdToDelete) {
                                console.log("deleted: ", card.name, card.id);
                                queryData.splice(index, 1);

                                deleteCard(card.name, cardIdToDelete);
                            }
                        })

                    }}>Comfirm</button>
                    
                    <button className="btn-cancel" onClick={() => setIsModalOverlay(!isModalOverlay)}>Cancel</button>
                </div>
            </div>
        </ModalOverLay>
    )
}