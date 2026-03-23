"use server";

import { signOut } from "@/lib/auth";

export async function logOutAction() {
    await signOut();
}