import dotenv from "dotenv";
dotenv.config();

const {
  API_ENDPOINT,
  API_URL,
  API_PORT,
} = process.env;

const url = `${API_URL}:${API_PORT}/${API_ENDPOINT}`

/**
 * @description Performs a GraphQL query.
 * @param {string} query GraphQL syntax string.
 * @example user(id: 20){ username }
 */
export const storeGet = (query: string) => {
  return fetch(`${url}?query=query{${query}}`)
  .then((response: any) => response.json());
}

/**
 * @description Performs a GraphQL mutation.
 * @param {string} query GraphQL syntax string.
 */
export const storePost = (query: string) => {
  return fetch(`${url}?query=mutation${query}`)
    .then((response: any) => response.json());
}