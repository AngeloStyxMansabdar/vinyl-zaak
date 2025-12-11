export interface Album {
    id: number;
    title: string;
    artist: string;
    year: number;
    genre: string;
    price: number;
    imageUrl: string;
    description: string;
}

export interface CommunityPost {
    id: number;
    username: string;
    message: string;
    timestamp: string;
}
