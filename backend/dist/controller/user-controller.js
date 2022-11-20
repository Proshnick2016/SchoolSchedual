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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserController = void 0;
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var info_1 = require("../model/info");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.postOne = function (logInFormData) {
        console.log(JSON.stringify(logInFormData));
    };
    __decorate([
        (0, routing_controllers_1.Post)('/usersRegistration'),
        (0, routing_controllers_1.OnUndefined)(204),
        __param(0, (0, routing_controllers_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [info_1.loginModel]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "postOne");
    UserController = __decorate([
        (0, routing_controllers_1.Controller)()
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
