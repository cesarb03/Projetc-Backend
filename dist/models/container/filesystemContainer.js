"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var FileContainer = /** @class */ (function () {
    function FileContainer(fileName) {
        var _this = this;
        this.fileName = fileName;
        this.connect();
        if (!fs_1.default.existsSync("./".concat(this.fileName))) {
            fs_1.default.promises.writeFile("./".concat(this.fileName), "").then(function () { return console.log("".concat(_this.fileName, " created")); });
        }
    }
    FileContainer.prototype.connect = function () {
        console.log('connected to filesystem');
    };
    return FileContainer;
}());
exports.default = FileContainer;
//# sourceMappingURL=filesystemContainer.js.map