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
let turnsDB = [];
const getTurnsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return turnsDB;
});
exports.getTurnsService = getTurnsService;
const getTurnByIdService = (turnID) => __awaiter(void 0, void 0, void 0, function* () {
    return turnsDB.find(turn => turn.id === turnID) || null;
});
exports.getTurnByIdService = getTurnByIdService;
const createTurnService = (turnData) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = turnData;
    if (userId === null || userId === undefined) {
        throw new Error("User ID is required to create a turn.");
    }
    const nextId = turnsDB.length + 1;
    const newTurn = {
        id: nextId,
        date: turnData.date,
        time: turnData.time,
        userId: turnData.userId,
        status: turnData.status
    };
    turnsDB.push(newTurn);
    return nextId;
});
exports.createTurnService = createTurnService;
const cancelTurnByIdService = (turnID) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = turnsDB.find(turn => turn.id === turnID);
    if (turn) {
        turn.status = "cancelled";
        return "Turn cancelled successfully";
    }
    return "The specified turn could not be found";
});
exports.cancelTurnByIdService = cancelTurnByIdService;
