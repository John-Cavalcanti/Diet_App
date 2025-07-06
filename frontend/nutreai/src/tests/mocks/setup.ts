import { setupWorker } from 'msw/browser'


export const worker = setupWorker()

export async function enableMSW() {
    const envMode = import.meta.env.MODE
    if (envMode !== 'development') {
      return
    }
  
    await worker.start()
  }