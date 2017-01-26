import fetchAPI, { postAPI } from './fetchAPI'

export function searchProfiles() {
  return fetchAPI('/profiles')
}

export function createProfile(profileinfo) {
   return postAPI('/profiles', profileinfo)
}
