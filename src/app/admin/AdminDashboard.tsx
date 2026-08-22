"use client";

import { useState } from 'react';
import { createBlog, updateBlog, deleteBlog } from '@/app/actions/blogActions';
import { logout } from '@/app/actions/authActions';

export default function AdminDashboard({ blogs }: { blogs: any[] }) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  async function handleDelete(id: string) {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        setErrorMsg(null);
        const result = await deleteBlog(id);
      if (result?.error) {
        setErrorMsg(result.error);
      }
      } catch (e: any) {
        setErrorMsg(e.message || 'Failed to delete blog.');
      }
    }
  }

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      if (editingBlog) {
        const result = await updateBlog(editingBlog.id, formData);
        if (result?.error) {
          setErrorMsg(result.error);
          return;
        }
      } else {
        const result = await createBlog(formData);
        if (result?.error) {
          setErrorMsg(result.error);
          return;
        }
      }
      setIsAdding(false);
      setEditingBlog(null);
    } catch (e: any) {
      console.error(e);
      setErrorMsg(e.message || 'An error occurred while saving.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {errorMsg && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm flex justify-between items-center animate-slide-down">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
              <p className="text-red-700 font-medium text-sm">{errorMsg}</p>
            </div>
            <button onClick={() => setErrorMsg(null)} className="text-red-500 hover:text-red-700">✕</button>
          </div>
        )}
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your blog content</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => { setIsAdding(true); setEditingBlog(null); }}
              className="bg-[#7749F8] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#59168B] transition-colors"
            >
              + Add New Blog
            </button>
            <button 
              onClick={() => logout()}
              className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Blog List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-semibold text-gray-600 text-sm">Title</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Author</th>
                <th className="p-4 font-semibold text-gray-600 text-sm">Date</th>
                <th className="p-4 font-semibold text-gray-600 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="p-4 text-gray-900 font-medium">{blog.title}</td>
                  <td className="p-4 text-gray-500 text-sm">{blog.author}</td>
                  <td className="p-4 text-gray-500 text-sm">{blog.date}</td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => setEditingBlog(blog)}
                      className="text-[#7749F8] hover:text-[#59168B] font-medium text-sm mr-4"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-500 hover:text-red-700 font-medium text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">No blogs found. Add one!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {(isAdding || editingBlog) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-gray-900">{editingBlog ? 'Edit Blog' : 'Add New Blog'}</h2>
              <button onClick={() => { setIsAdding(false); setEditingBlog(null); }} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <form 
              className="p-6 space-y-4"
              action={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
                  <input required name="title" defaultValue={editingBlog?.title} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title (Portuguese) - Optional</label>
                  <input name="titlePt" defaultValue={editingBlog?.titlePt} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input required name="author" defaultValue={editingBlog?.author} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input required type="date" name="date" defaultValue={editingBlog?.date} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]" />
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Blog Image</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Upload New Image</label>
                    <input type="file" accept="image/*" name="imageFile" className="w-full border border-gray-300 rounded-lg p-2 text-sm text-gray-900 bg-white focus:ring-[#7749F8] focus:border-[#7749F8]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">OR Image URL</label>
                    <input type="text" name="imageUrl" defaultValue={editingBlog?.image} placeholder="https://example.com/image.jpg" className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 bg-white focus:ring-[#7749F8] focus:border-[#7749F8]" />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">Note: If you provide both, the uploaded file takes priority. {editingBlog && !editingBlog.image?.startsWith('http') ? 'Currently using a local uploaded file.' : ''}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (English)</label>
                  <textarea required name="excerpt" defaultValue={editingBlog?.excerpt} rows={2} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Portuguese) - Optional</label>
                  <textarea name="excerptPt" defaultValue={editingBlog?.excerptPt} rows={2} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content (English) - Markdown</label>
                  <textarea required name="content" defaultValue={editingBlog?.content} rows={10} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 font-mono text-sm focus:ring-[#7749F8] focus:border-[#7749F8]" placeholder="You can use **bold**, *italics*, # Headings, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content (Portuguese) - Optional</label>
                  <textarea name="contentPt" defaultValue={editingBlog?.contentPt} rows={10} className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 font-mono text-sm focus:ring-[#7749F8] focus:border-[#7749F8]" placeholder="Conteúdo em português..." />
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-3 sticky bottom-0 bg-white border-t border-gray-100 py-4 -mx-6 px-6">
                <button type="button" onClick={() => { setIsAdding(false); setEditingBlog(null); }} className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium disabled:opacity-50">Cancel</button>
                <button type="submit" disabled={isSubmitting} className="px-5 py-2 bg-[#7749F8] text-white rounded-lg hover:bg-[#59168B] font-medium disabled:opacity-50">
                  {isSubmitting ? 'Saving...' : (editingBlog ? 'Update Blog' : 'Create Blog')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
