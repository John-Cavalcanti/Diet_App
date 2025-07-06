import { setupWorker } from 'msw/browser'


export const worker = setupWorker()

export async function enableMSW() {
    const envMode = import.meta.env.MODE
    if (envMode !== 'test') {
      return
    }
  
    await worker.start()
  }