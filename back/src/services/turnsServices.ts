import TurnDto from "../dto/TurnDto"
import { TurnModel, UserModel } from "../config/data-source";
import { Turn } from "../entities/Turn";


export const getTurnsService = async (): Promise<Turn[]> => {
    const turns = await TurnModel.find({
        relations:{
            user: true
        }
    });
    return turns
};

export const getTurnByIdService = async (turnID: number): Promise<Turn | null> => {
    const turn = await TurnModel.findOneBy({
        id: turnID
    });
    return turn;
};

export const createTurnService = async (turnData: TurnDto): Promise<Turn> => {
    const createTurn = await TurnModel.create(turnData);
    const result = await TurnModel.save(createTurn);

    const user = await UserModel.findOneBy({
        id: turnData.userId
    })

    if(user){
        createTurn.user = user;
        TurnModel.save(createTurn)
    }

    return createTurn;
}

export const cancelTurnByIdService = async (turnID: number): Promise<void> => {

        const turn = await TurnModel.findOne({ where: { id: turnID } });

        if (turn) {
            turn.status = "cancelled";
            await TurnModel.save(turn);
        }
};
