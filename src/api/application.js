import fetchAPImail, { postAPImail } from './fetchAPImail'

export function applyJob() {
  return fetchAPImail('/jobs')
}

export function applyJob(jobApplication) {
   return postAPImail('#', jobApplication)
}
