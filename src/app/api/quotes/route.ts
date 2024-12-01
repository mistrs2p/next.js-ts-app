// import { NextResponse } from "next/server";

// export async function GET(request: Request, response: Response) {
//     return new NextResponse('Server Error', {status: 500})
// }

export async function GET() {
  // const res = await fetch('https://api.api-ninjas.com/v1/animals?name=cheetah', {
  const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "veJO3JLwTP/lmnMyPhoYDA==ffFMEMs1klQnCXU0",
    },
    // cache: "default",
    //   OR
    next: {
      revalidate: 1,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
