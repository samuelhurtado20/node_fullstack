"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.findById = exports.getNonSensitiveInfoDiaryEntry = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getNonSensitiveInfoDiaryEntry = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    });
};
exports.getNonSensitiveInfoDiaryEntry = getNonSensitiveInfoDiaryEntry;
const findById = (id) => {
    const entry = diaries.find((d) => d.id === id);
    if (entry != null) {
        const { ...restOfDiary } = entry;
        return restOfDiary;
    }
    return undefined;
};
exports.findById = findById;
const addDiary = (newDiary) => {
    const newDiaryEntry = {
        id: Math.max(...diaries.map((d) => d.id)) + 1,
        ...newDiary
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
exports.addDiary = addDiary;
