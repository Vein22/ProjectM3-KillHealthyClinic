import ICredential from "../interfaces/ICredential";

const credentialsDB: ICredential[] = [];

export const createCredentials = async (username: string, password: string): Promise<number> => {

    const nextId = credentialsDB.length + 1;

    const newCredential: ICredential = {
        id: nextId,
        username,
        password
    };

    credentialsDB.push(newCredential);

    return nextId;
}

export const validateCredentials = async (username: string, password: string): Promise<number | null> => {
    for (const credential of credentialsDB) {
        if (credential.username === username && credential.password === password) {
            return credential.id;
        }
    }
    return null;
}
