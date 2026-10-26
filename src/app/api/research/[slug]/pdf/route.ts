import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const { slug } = resolvedParams;

    // Search by slug first, or fallback to ID
    const research = await prisma.research.findFirst({
      where: {
        OR: [
          { slug: slug },
          { id: slug },
        ],
      },
    });

    if (!research) {
      return new NextResponse('Research document not found', { status: 404 });
    }

    // If PDF binary data is stored in the database
    if (research.pdfData) {
      const buffer = Buffer.from(research.pdfData, 'base64');
      const filename = research.pdfFileName || `${research.slug}.pdf`;

      return new NextResponse(buffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `inline; filename="${encodeURIComponent(filename)}"`,
          'Content-Length': buffer.length.toString(),
          'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
        },
      });
    }

    // If only an external URL is saved, redirect to it
    if (research.pdfUrl) {
      return NextResponse.redirect(research.pdfUrl);
    }

    return new NextResponse('PDF document not available for this publication', { status: 404 });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
