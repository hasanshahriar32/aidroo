import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.TOKEN_SECRET);
const EXPIRES_IN = process.env.TOKEN_SECRET_EXPIRE;

export async function generateToken(userId) {
  const jwt = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(EXPIRES_IN)
    .sign(JWT_SECRET);

  return jwt;
}

export async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}
