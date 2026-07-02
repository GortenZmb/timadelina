"use server"

import { db } from "@/lib/db"
import { guests } from "@/lib/db/schema"

export type RsvpResult = { ok: true } | { ok: false; error: string }

export async function submitRsvp(formData: {
  fullName: string
  attending: boolean
}): Promise<RsvpResult> {
  const fullName = formData.fullName?.trim()

  if (!fullName || fullName.length < 2) {
    return { ok: false, error: "empty_name" }
  }

  try {
    await db.insert(guests).values({
      fullName,
      attending: formData.attending,
    })
    return { ok: true }
  } catch (error) {
    console.log("[v0] RSVP insert failed:", error instanceof Error ? error.message : error)
    return { ok: false, error: "server_error" }
  }
}
