import fetchAPI, { postAPI } from './fetchAPI'

export function searchJobs() {
  return fetchAPI('/jobs')
}

export function createJob(jobInfo) {
   return postAPI('/jobs', jobInfo)
}
