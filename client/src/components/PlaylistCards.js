import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import SongCard from './SongCard.js'
import EditSongModal from './EditSongModal.js'
import RemoveSongModal from './RemoveSongModal.js'
import { GlobalStoreContext } from '../store'
/*
    This React component lets us edit a loaded list, which only
    happens when we are on the proper route.
    
    @author McKilla Gorilla
*/
function PlaylistCards() {
    const { store } = useContext(GlobalStoreContext);
    store.history = useHistory();
    let modalJSX = "";
    if (store.isEditSongModalOpen()) {
        modalJSX = <EditSongModal />;
    }
    else if (store.isRemoveSongModalOpen()) {
        modalJSX = <RemoveSongModal />;
    }
    return (
        <div id="playlist-cards">
        {
            store.currentList.songs.map((song, index) => (
                <SongCard
                    id={'playlist-song-' + (index)}
                    key={'playlist-song-' + (index)}
                    index={index}
                    song={song}
                />
            ))
        }
        {modalJSX}
        </div>
    )
}

export default PlaylistCards;