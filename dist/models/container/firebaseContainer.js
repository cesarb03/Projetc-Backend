"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var serviceAccountKey_json_1 = __importDefault(require("../../db/serviceAccountKey.json"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
// import config from '../../db/config'
// admin.initializeApp({
//   credential: admin.credential.cert(config.firebase)
// })
// const db = admin.firestore()
var serviceAccount = serviceAccountKey_json_1.default;
var FirebaseContainer = /** @class */ (function () {
    function FirebaseContainer(collection) {
        // this.collection = db.collection(collection)
        this.collection = collection;
        this.connect();
    }
    FirebaseContainer.prototype.connect = function () {
        try {
            if (firebase_admin_1.default.apps.length === 0) {
                firebase_admin_1.default.initializeApp({
                    credential: firebase_admin_1.default.credential.cert(serviceAccount),
                });
                console.log('connected to firebase');
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    return FirebaseContainer;
}());
exports.default = FirebaseContainer;
//# sourceMappingURL=firebaseContainer.js.map