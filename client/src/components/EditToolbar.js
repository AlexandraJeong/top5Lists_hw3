import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { useHistory } from 'react-router-dom'
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);
    const history = useHistory();

    let enabledButtonClass = "top5-button";
    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        history.push("/");
        store.closeCurrentList();
    }
    let editStatus = false;
    if (store.isListNameEditActive) {
        editStatus = true;
    }
    console.log("hasUndo: "+store.hasUndo()+" hasRedo: "+store.hasRedo());
    return (
        <div id="edit-toolbar">
            <div
                disabled={editStatus}
                id='undo-button'
                onClick={handleUndo}
                className={!store.hasUndo()||store.itemEditActive||store.isListNameEditActive?"top5-button-disabled":"top5-button"}>
                &#x21B6;
            </div>
            <div
                disabled={editStatus}
                id='redo-button'
                className = {!store.hasRedo()||store.itemEditActive||store.isListNameEditActive?"top5-button-disabled":"top5-button"}
                onClick={handleRedo}>
                &#x21B7;
            </div>
            <div
                disabled={editStatus}
                id='close-button'
                onClick={handleClose}
                className={!store.currentList||store.itemEditActive||store.isListNameEditActive?"top5-button-disabled":"top5-button"}>
                &#x24E7;
            </div>
        </div>
    )
}

export default EditToolbar;