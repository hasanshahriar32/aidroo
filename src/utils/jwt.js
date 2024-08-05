import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.TOKEN_SECRET;

export function generateToken(userId) {
  return sign({ userId }, JWT_SECRET, {
    expiresIn: process.env.TOKEN_SECRET_EXPIRE,
  });
}

export function verifyToken(token) {
  console.log(JWT_SECRET);
  if (token) {
    return verify(token, JWT_SECRET);
  }
}
