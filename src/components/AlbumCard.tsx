import { Link } from "react-router-dom";
import type { Album } from "../types/types";

interface Props {
    album: Album;
}

const AlbumCard = ({ album }: Props) => {
    return (
        <div className="card">
            <img src={album.imageUrl} width="100%" alt={album.title} />
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
            <Link to={`/detail/${album.id}`}>Bekijk</Link>
        </div>
    );
};

export default AlbumCard;
