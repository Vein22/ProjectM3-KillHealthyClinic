import { CredentialModel, UserModel } from "../config/data-source";
import  CredentialDto  from "../dto/CredentialDto"

export const createCredentials = async (credentialData: CredentialDto): Promise<number> => {
    const newCredential = await CredentialModel.create(credentialData);
    await CredentialModel.save(newCredential);
    return newCredential.id;
}

export const validateCredentials = async (credentialData: CredentialDto): Promise<number | null> => {
    const { username, password } = credentialData;
    const credential = await CredentialModel.findOne({ where: { username, password } });
    return credential ? credential.id : null;
}
