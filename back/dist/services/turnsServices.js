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
exports.cancelTurnById = exports.createTurn = exports.getTurnById = exports.getTurns = void 0;
let turnsDB = [];
const getTurns = () => __awaiter(void 0, void 0, void 0, function* () {
    return turnsDB;
});
exports.getTurns = getTurns;
const getTurnById = (turnID) => __awaiter(void 0, void 0, void 0, function* () {
    return turnsDB.find(turn => turn.id === turnID) || null;
});
exports.getTurnById = getTurnById;
const createTurn = (date, time, userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    if (userId === null || userId === undefined) {
        throw new Error("User ID is required to create a turn.");
    }
    const nextId = turnsDB.length + 1;
    const newTurn = {
        id: nextId,
        date,
        time,
        userId,
        status
    };
    turnsDB.push(newTurn);
    return nextId;
});
exports.createTurn = createTurn;
const cancelTurnById = (turnID) => __awaiter(void 0, void 0, void 0, function* () {
    const turn = turnsDB.find(turn => turn.id === turnID);
    if (turn) {
        turn.status = "cancelled";
        return "Turn cancelled successfully";
    }
    return "The specified turn could not be found";
});
exports.cancelTurnById = cancelTurnById;
