export enum sucessMessage {
    updateStatus = "status alterado com sucesso",
    createGenre = "Genero adicionado com sucesso",
    createAlbum = "Album criado com sucesso",
    createSong = "Musica criada com sucesso"
};

export enum failureMessage{
    password = "senha com menos de 6 digitos",
    role = "não existe usuario do tipo selecionado (role invalido)",
    admin = "o usuario não tem permissão para realizar esta ação",
    login = "usuario não encontrado",
    wrongPassword = "senha não confere",
    description = "apenas bandas podem ter descrição",
    email = "email invalido",
    status = "status invalido",
    band = "Apenas bandas podem criar fazer esta operação",
    active = "Usuario não ativo",
    noGenre = "por favor informar pelo menos um genero",
    genre = "genero não valido"
};