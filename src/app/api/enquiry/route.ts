import { NextResponse } from "next/server";

type EnquiryPayload = {
  name?: unknown;
  phone?: unknown;
  city?: unknown;
  message?: unknown;
};

function asTrimmedString(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  let payload: EnquiryPayload;
  try {
    payload = (await req.json()) as EnquiryPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  const name = asTrimmedString(payload.name);
  const phone = asTrimmedString(payload.phone);
  const city = asTrimmedString(payload.city);
  const message = asTrimmedString(payload.message);

  if (name.length < 2 || phone.length < 8) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required" },
      { status: 400 }
    );
  }

  // Production note:
  // Connect this to email/CRM (Resend, SMTP, Sheets, etc).
  // For now we return success so the form works on Vercel without extra services.
  console.log("[enquiry]", { name, phone, city, message });

  return NextResponse.json({ ok: true }, { status: 200 });
}

