"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelTurnByIdService = exports.createTurnService = exports.getTurnByIdService = exports.getTurnsService = void 0;
const data_source_1 = require("../config/data-source");
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield data_source_1.TurnModel.find({
        relations: {
            user: true
        }
    });
    return turns;
});
exports.getTurnsService = getTurnsService;
const getTurnByIdService = (turnID) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.findOneBy({
        id: turnID
    });
    return turn;
});
exports.getTurnByIdService = getTurnByIdService;
const createTurnService = (turnData) => __awaiter(void 0, void 0, void 0, function* () {
    const createTurn = yield data_source_1.TurnModel.create(turnData);
    const result = yield data_source_1.TurnModel.save(createTurn);
    const user = yield data_source_1.UserModel.findOneBy({
        id: turnData.userId
    });
    if (user) {
        createTurn.user = user;
        data_source_1.TurnModel.save(createTurn);
    }
    return createTurn;
});
exports.createTurnService = createTurnService;
const cancelTurnByIdService = (turnID) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = yield data_source_1.TurnModel.findOne({ where: { id: turnID } });
    if (turn) {
        turn.status = "cancelled";
        yield data_source_1.TurnModel.save(turn);
    }
});
exports.cancelTurnByIdService = cancelTurnByIdService;
