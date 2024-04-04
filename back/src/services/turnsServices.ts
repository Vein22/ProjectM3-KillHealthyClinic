import ITurn from "../interfaces/ITurn";
import TurnDto from "../dto/TurnDto"

let turnsDB: ITurn[] = [];

export const getTurnsService = async (): Promise<ITurn[]> => {
    return turnsDB
};

export const getTurnByIdService = async (turnID: number): Promise<ITurn | null> => {
    return turnsDB.find(turn => turn.id === turnID) || null;
};

export const createTurnService = async (turnData: TurnDto): Promise<number> => {
    const { userId } = turnData;
    if(userId === null || userId === undefined) {
        throw new Error ("User ID is required to create a turn.")
    }

    const nextId = turnsDB.length + 1;

    const newTurn: ITurn = {
        id: nextId,
        date: turnData.date, 
        time: turnData.time, 
        userId: turnData.userId, 
        status: turnData.status
    };

    turnsDB.push(newTurn);

    return nextId;
}

export const cancelTurnByIdService = async (turnID: number): Promise<string> => {
    const turn = turnsDB.find(turn => turn.id === turnID)

    if (turn) {
        turn.status = "cancelled";
        return "Turn cancelled successfully"
    }
        return "The specified turn could not be found"
};
