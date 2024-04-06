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
exports.cancel = exports.schedule = exports.getTurnById = exports.getAllTurns = void 0;
const turnsServices_1 = require("../services/turnsServices");
const getAllTurns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield (0, turnsServices_1.getTurnsService)();
    res.status(200).json(turns);
});
exports.getAllTurns = getAllTurns;
const getTurnById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = parseInt(req.params.id);
    const turn = yield (0, turnsServices_1.getTurnByIdService)(turnId);
    if (turn) {
        res.json(turn);
    }
    else {
        res.status(404).json({ message: 'Turn not found.' });
    }
});
exports.getTurnById = getTurnById;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId, status } = req.body;
    const turnId = yield (0, turnsServices_1.createTurnService)({ date, time, userId, status });
    res.status(201).json({ message: "Successfully created turn.", turnId });
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const turnId = parseInt(req.params.id);
    yield (0, turnsServices_1.cancelTurnByIdService)(turnId);
    res.status(200).json({ message: "Turn cancelled successfully.", turnId });
});
exports.cancel = cancel;
