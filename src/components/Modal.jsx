

export default function Modal({isOpen, onClose}){

    

    return(
        <>
            { isOpen &&  <div className="modal-container">
                             <div className="modal">
                            <p className="modal-title">User successfully registrated</p>
                            <button className="modal-btn" onClick={onClose}>close</button>
                            </div>
                        </div>
            }
        </>
    )
}