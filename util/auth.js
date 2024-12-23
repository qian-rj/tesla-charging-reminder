import CryptoJS from "crypto-js";

// Function to generate a random alphanumeric string (code verifier)
export function generateCodeVerifier(length = 86) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to generate the code challenge from the code verifier
export function generateCodeChallenge(codeVerifier) {
  // Hash the code verifier using SHA-256
  const hash = CryptoJS.SHA256(codeVerifier);

  // Convert the hash to a word array, then to a Uint8Array
  const hashArray = [];
  hash.words.forEach(word => {
    hashArray.push((word >>> 24) & 0xff);
    hashArray.push((word >>> 16) & 0xff);
    hashArray.push((word >>> 8) & 0xff);
    hashArray.push(word & 0xff);
  });

  // Convert Uint8Array to Base64
  const base64 = btoa(String.fromCharCode(...hashArray));

  // Encode the hash in URL-safe Base64
  const codeChallenge = base64
    .replace(/\+/g, "-") // Convert '+' to '-'
    .replace(/\//g, "_") // Convert '/' to '_'
    .replace(/=+$/, ""); // Remove any trailing '='

  return codeChallenge;
}
