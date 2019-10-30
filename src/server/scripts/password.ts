"use strict";
import * as crypto from "crypto";

/**
 * @desc generates random string of characters i.e salt
 * @param {number} length - Length of the random string.
 */
const genRandomString = (length: number) =>
  crypto.randomBytes(Math.ceil(length/2))
    .toString("hex")     /** convert to hexadecimal format */
    .slice(0, length);   /** return required number of characters */

/**
 * @desc hash password with sha512.
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
export const sha512 = (password: string, salt: string) => {
    const hash = crypto.createHmac("sha512", salt); /** Hashing algorithm sha512 */
    hash.update(password);
    const value = hash.digest("hex");
    return {
        salt: salt,
        passwordHash: value
    };
};

/** Generates a salted password and salt. */
export const saltHashPassword = (userPassword: string) => {
    const salt = genRandomString(16); /** Gives us salt of length 16 */
    return sha512(userPassword, salt);
}