import { useParams } from "react-router-dom";
import albums from "../data/albums.json";
import type { Album } from "../types/types";

const Detail = () => {
    const { id } = useParams<{ id: string }>();
    const album = (albums as Album[]).find(a => a.id === Number(id));

    if (!album)
        return (
            <div className="page-container">
                <p>Album niet gevonden.</p>
            </div>
        );

    return (
        <div className="page-container">
            <div className="album-detail">
                <h1>{album.title}</h1>
                <img src={album.imageUrl} width="250" alt={album.title} />

                <p><strong>Artiest:</strong> {album.artist}</p>
                <p><strong>Jaar:</strong> {album.year}</p>
                <p><strong>Genre:</strong> {album.genre}</p>
                <p><strong>Prijs:</strong> €{album.price}</p>

                <p style={{ marginTop: "10px" }}>
                    {album.description}
                </p>
            </div>
        </div>
    );
};

export default Detail;
