export interface AlbumInputDTO{
    id: string,
    name: string,
    band_id: string,
};

export interface AlbumDataDTO{
    name: string,
    genres: string[],
    token: string
};