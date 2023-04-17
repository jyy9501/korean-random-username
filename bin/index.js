const { USERNAME_ADJECTIVES, USERNAME_PRONOUNS } = require("./constants");

const generateRandomCode = ({ maxNum }) => {
  if (!maxNum) return "";
  return Math.floor(Math.random() * maxNum + 1).toString();
};

const randomUsername = (maxNum = 0) => {
  const adjective =
    USERNAME_ADJECTIVES[Math.floor(Math.random() * USERNAME_ADJECTIVES.length)];
  const pronoun =
    USERNAME_PRONOUNS[Math.floor(Math.random() * USERNAME_PRONOUNS.length)];
  const code = generateRandomCode({ maxNum });
  return adjective + pronoun + code;
};

module.exports = { randomUsername };
