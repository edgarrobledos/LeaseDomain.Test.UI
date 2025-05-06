import { NextResponse } from "next/server";
import mockSummaryResponse from "@/mocks/summary.json";

export async function GET() {
  try {
    // Use imported mock data
    // In real implementation, this would call the LD API
    const responseData = { ...mockSummaryResponse };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error fetching lease summary:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
