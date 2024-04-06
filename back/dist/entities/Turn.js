"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = void 0;
const typeorm_1 = require("typeorm");
const Column_1 = require("typeorm/decorator/columns/Column");
const PrimaryGeneratedColumn_1 = require("typeorm/decorator/columns/PrimaryGeneratedColumn");
const Entity_1 = require("typeorm/decorator/entity/Entity");
const User_1 = require("./User");
let Turn = class Turn {
};
exports.Turn = Turn;
__decorate([
    (0, PrimaryGeneratedColumn_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Turn.prototype, "id", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], Turn.prototype, "date", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], Turn.prototype, "time", void 0);
__decorate([
    (0, Column_1.Column)("integer"),
    __metadata("design:type", Number)
], Turn.prototype, "userId", void 0);
__decorate([
    (0, Column_1.Column)(),
    __metadata("design:type", String)
], Turn.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.turns),
    __metadata("design:type", User_1.User)
], Turn.prototype, "user", void 0);
exports.Turn = Turn = __decorate([
    (0, Entity_1.Entity)({
        name: "turns"
    })
], Turn);
