import {
  DiaryEntry,
  NonSensitiveInfoDiaryEntry,
  NewDiaryEntry,
} from '../types';
import diaryData from './diaries.json';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = () => diaries;

export const getNonSensitiveInfoDiaryEntry =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    });
  };

export const findById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id);
  if (entry != null) {
    const { comment, ...restOfDiary } = entry;
    return restOfDiary;
  }
  return undefined;
};

export const addDiary = (newDiary: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...newDiary,
  };
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};
