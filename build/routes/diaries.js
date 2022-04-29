"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diary"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send({
        'Fetching all entry diaries': diaryServices.getNonSensitiveInfoDiaryEntry()
    });
});
router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id);
    return diary != null ? res.send(diary) : res.sendStatus(404);
    //res.send({ 'Fetching single entry diary': diary })
});
router.post('/', (req, res) => {
    // const { date, weather, visibility, comment } = req.body;
    // const newEntry = diaryServices.addDiary({date,weather,visibility,comment})
    // res.send(newEntry)
    try {
        console.log(req.body);
        const newDiaryEntry = (0, utils_1.default)(req.body);
        console.log(newDiaryEntry);
        const added = diaryServices.addDiary(newDiaryEntry);
        console.log(added);
        res.json(added);
    }
    catch (e) {
        res.status(500).send(e.message);
    }
});
exports.default = router;
