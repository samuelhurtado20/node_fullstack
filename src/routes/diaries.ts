import express from 'express'
import * as diaryServices from '../services/diary'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send({
    'Fetching all entry diaries': diaryServices.getNonSensitiveInfoDiaryEntry()
  })
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return diary != null ? res.send(diary) : res.sendStatus(404)

  // res.send({ 'Fetching single entry diary': diary })
})

router.post('/', (req, res) => {
  // const { date, weather, visibility, comment } = req.body;
  // const newEntry = diaryServices.addDiary({date,weather,visibility,comment})
  // res.send(newEntry)
  try {
    console.log(req.body)
    const newDiaryEntry = toNewDiaryEntry(req.body)
    console.log(newDiaryEntry)
    const added = diaryServices.addDiary(newDiaryEntry)
    console.log(added)
    res.json(added)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
})

export default router
