import { CredentialModel } from "../config/data-source";


export const createCredentials = async (username: string, password: string): Promise<number> => {
    const newCredential = CredentialModel.create({ username, password });
    await CredentialModel.save(newCredential);
    return newCredential.id;
}

export const validateCredentials = async (username: string, password: string): Promise<number | null> => {
    const credential = await CredentialModel.findOne({ where: { username, password } });
    return credential ? credential.id : null;
}
