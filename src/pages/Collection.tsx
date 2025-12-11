import { useEffect, useState } from "react";
import albumsData from "../data/albums.json";
import type { Album } from "../types/types";
import AlbumCard from "../components/AlbumCard";

const Collection = () => {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        setAlbums(albumsData as Album[]);
    }, []);

    return (
        <div className="page-container">
            <h1>Collectie</h1>

            <div className="album-grid">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))}
            </div>
        </div>
    );
};

export default Collection;
