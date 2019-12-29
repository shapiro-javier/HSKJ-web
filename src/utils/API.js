export const JGET = (endpoint) => fetch(`https://gounlimited.to/api/${endpoint}?key=${process.env.GO_KEY}`)

