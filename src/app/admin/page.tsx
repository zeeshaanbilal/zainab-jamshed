import { prisma } from '@/lib/prisma';
import AdminDashboard from './AdminDashboard';

export const dynamic = 'force-dynamic';
export default async function AdminPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  const research = await prisma.research.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      author: true,
      date: true,
      category: true,
      excerpt: true,
      description: true,
      pdfUrl: true,
      pdfFileName: true,
      fileSize: true,
      titlePt: true,
      excerptPt: true,
      descriptionPt: true,
      createdAt: true,
      // exclude huge base64 from initial page payload
    }
  });

  return <AdminDashboard blogs={blogs} messages={messages} research={research} />;
}
