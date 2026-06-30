import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin-auth";
import { listOrders } from "@/lib/orders";

function cell(value: unknown) {
  const text = String(value ?? "").replace(/\r?\n/g, " ");
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  await requireAdmin();
  const orders = await listOrders();
  const headers = [
    "id",
    "createdAt",
    "status",
    "sourceChannel",
    "sourceReviewId",
    "selectedTemplateId",
    "brandName",
    "productName",
    "productUrl",
    "contactEmail",
    "targetPlatform",
    "targetLanguage",
    "quoteUsd",
    "modelCostUsd",
    "humanFixMinutes",
    "finalDeliveryUrl",
  ];

  const rows = [
    headers.join(","),
    ...orders.map((order) => headers.map((key) => cell(order[key as keyof typeof order])).join(",")),
  ];

  return new NextResponse(rows.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="vacavaca-studio-orders.csv"`,
    },
  });
}
