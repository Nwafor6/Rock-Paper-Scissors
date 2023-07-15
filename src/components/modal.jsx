import React from "react";


const Modal=()=>{
    return(
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-3 modal-main">
                        <div className="modal-header border-0">
                            <h1 className="modal-title" id="exampleModalLabel">Rules</h1>
                            <button type="button" className="btn-close" id="top-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="modalgameContainer text-center">
                                <div className="modalTriangle-bg"><img className="img-fluid" src="/images/image-rules.svg" alt="" /></div>
                            </div>
                        </div>
                        <div className="modal-footer border-0 text-center">
                            <button type="button" className="btn-close" id="bottom-close-btn"  data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Modal