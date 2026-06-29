import { NextResponse } from "next/server";
import { countRecentOrders, createOrder } from "@/lib/orders";

export async function POST(request: Request) {
  try {
    const input = await request.json();
    validatePublicOrderInput(input);

    const clientIp = getClientIp(request);
    const email = String(input.contactEmail || "").trim().toLowerCase();
    const counts = await countRecentOrders({ email, clientIp });
    const emailLimit = readPositiveIntegerEnv("ORDER_DAILY_EMAIL_LIMIT", 5);
    const ipLimit = readPositiveIntegerEnv("ORDER_DAILY_IP_LIMIT", 20);

    if (email && counts.byEmail >= emailLimit) {
      return NextResponse.json({ error: "Daily order request limit reached for this email." }, { status: 429 });
    }

    if (clientIp && counts.byIp >= ipLimit) {
      return NextResponse.json({ error: "Daily order request limit reached. Please try again later." }, { status: 429 });
    }

    const order = await createOrder(input, clientIp);
    return NextResponse.json({ order }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create order" },
      { status: 400 }
    );
  }
}

function validatePublicOrderInput(input: Record<string, unknown>) {
  const email = String(input.contactEmail || "").trim();
  const productUrl = String(input.productUrl || "").trim();

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email.");
  }

  if (productUrl && !/^https?:\/\//i.test(productUrl)) {
    throw new Error("Product link must start with http:// or https://");
  }
}

function readPositiveIntegerEnv(name: string, fallback: number) {
  const parsed = Number(process.env[name]);
  return Number.isFinite(parsed) && parsed > 0 ? Math.floor(parsed) : fallback;
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  return forwarded || realIp || undefined;
}
