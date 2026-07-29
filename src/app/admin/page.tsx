import { prisma } from '@/lib/prisma';
import AdminDashboard from './AdminDashboard';

export default async function AdminPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  return <AdminDashboard blogs={blogs} />;
}
