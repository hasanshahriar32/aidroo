import db from "@/config/model";
import { NextResponse } from "next/server";

export async function PUT(req) {
  const { id } = req.url.split("/").pop();
  const { username, email, password } = await req.json();
  try {
    const [updated] = await db.User.update(
      { username, email, password },
      {
        where: { id },
      }
    );
    if (!updated) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  const { id } = req.url.split("/").pop();
  try {
    const deleted = await db.User.destroy({ where: { id } });
    if (!deleted) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
