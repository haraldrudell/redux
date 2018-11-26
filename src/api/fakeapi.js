/*
© 2018-present Harald Rudell <harald.rudell@gmail.com> (http://www.haraldrudell.com)
All rights reserved.
*/
/*
© 2018-present Harald Rudell <harald.rudell@gmail.com> (http://www.haraldrudell.com)
All rights reserved.
*/
import data from './data'
import { createJob as cj } from './transforms'
//let debug = true

export const getSoftware = () => data.software
export const getHardware = () => data.hardware
export function createJob(o) {
  const b = cj(o, data)
  if (b) return b
  else throw new Error('bad createJob arguments')
}
export async function getJobs() {
  return data.jobs
}

export function setDebug(debug0) {
  //debug = debug0
}

export function imageUrl(src) {
  return `https://raw.githubusercontent.com/haraldrudell/redux/master/public/${src}`
}
