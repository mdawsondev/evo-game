import * as readline from "readline";

/**
 * Standard readline interface from node.
*/
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Prompt the user for input.
 * @param q String that will prompt the user.
 * @param cb The callback that the user's answer will trigger.
 */
export const prompt = (q: string, cb: any) =>
  rl.question(q, (ans: string) => {
    cb(ans);
    rl.close();
});