import { buildPresentation } from "@/lib/presentation/createDeck";

export const dynamic = "force-dynamic";

export async function GET(): Promise<Response> {
  const buffer = await buildPresentation();

  return new Response(buffer, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "Content-Disposition": "attachment; filename=stsc-department-overview.pptx",
      "Cache-Control": "public, max-age=0, must-revalidate"
    }
  });
}
