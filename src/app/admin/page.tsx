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
  
  return <AdminDashboard blogs={blogs} messages={messages} />;
}
