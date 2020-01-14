export const JGET = (endpoint, fileID) =>
  fetch(
    `https://gounlimited.to/api/${endpoint}?key=${process.env.GO_KEY}&${fileID}`
  )
