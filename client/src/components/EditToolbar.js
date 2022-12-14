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

    function handleAddSong() {
        store.addNewSong();
    }
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
    let addSongClass = "edit-toolbar-button";
    let canAddSong = store.currentList !== null;
    if (!canAddSong) addSongClass += "-disabled";
    let undoClass = "edit-toolbar-button";
    let canUndo = store.canUndo();
    if (!canUndo) undoClass += "-disabled";
    let redoClass = "edit-toolbar-button";
    let canRedo = store.canRedo();
    if (!canRedo) redoClass += "-disabled";
    let closeClass = "edit-toolbar-button";
    let canClose = store.currentList !== null;
    if (!canClose) closeClass += "-disabled";
    return (
        <span id="edit-toolbar">
            <input
                type="button"
                id='add-song-button'
                disabled={!canAddSong}
                value="+"
                className={addSongClass}
                onClick={handleAddSong}
            />
            <input
                type="button"
                id='undo-button'
                disabled={!canUndo}
                value="⟲"
                className={undoClass}
                onClick={handleUndo}
            />
            <input
                type="button"
                id='redo-button'
                disabled={!canRedo}
                value="⟳"
                className={redoClass}
                onClick={handleRedo}
            />
            <input
                type="button"
                id='close-button'
                disabled={!canClose}
                value="X"
                className={closeClass}
                onClick={handleClose}
            />
        </span>);
}

export default EditToolbar;