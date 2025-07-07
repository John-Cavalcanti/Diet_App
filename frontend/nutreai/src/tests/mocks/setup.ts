import { setupWorker } from 'msw/browser'
import { loginMock } from './login'
import { postFormMock } from './form'
import { postWeeklyDietMock } from './weekly-diet/post'

export const worker = setupWorker(loginMock, postFormMock, postWeeklyDietMock)

export async function enableMSW() {
    const envMode = import.meta.env.MODE
    if (envMode !== 'test') {
      return
    }
  
    await worker.start()
  }