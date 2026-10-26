"use client";

import { useState, useEffect } from 'react';
import { createBlog, updateBlog, deleteBlog } from '@/app/actions/blogActions';
import { createResearch, updateResearch, deleteResearch } from '@/app/actions/researchActions';
import { logout } from '@/app/actions/authActions';
import { deleteContactMessage } from '@/app/actions/contactActions';

export default function AdminDashboard({
  blogs,
  messages,
  research = [],
}: {
  blogs: any[];
  messages: any[];
  research?: any[];
}) {
  const [activeTab, setActiveTab] = useState<'blogs' | 'research' | 'messages'>('blogs');
  const [isAdding, setIsAdding] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);

  // Research States
  const [isAddingResearch, setIsAddingResearch] = useState(false);
  const [editingResearch, setEditingResearch] = useState<any | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [selectedFileSize, setSelectedFileSize] = useState<string | null>(null);

  // Handle URL query parameters (e.g. /admin?tab=research&action=new)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      const action = params.get('action');
      if (tab === 'research') {
        setActiveTab('research');
        if (action === 'new') {
          setIsAddingResearch(true);
          setEditingResearch(null);
        }
      } else if (tab === 'blogs') {
        setActiveTab('blogs');
        if (action === 'new') {
          setIsAdding(true);
          setEditingBlog(null);
        }
      }
    }
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Slug Modal States (for Blogs)
  const [pendingFormData, setPendingFormData] = useState<FormData | null>(null);
  const [slugPromptVisible, setSlugPromptVisible] = useState(false);
  const [suggestedSlug, setSuggestedSlug] = useState('');

  // Slug Modal States (for Research)
  const [pendingResearchFormData, setPendingResearchFormData] = useState<FormData | null>(null);
  const [researchSlugPromptVisible, setResearchSlugPromptVisible] = useState(false);
  const [suggestedResearchSlug, setSuggestedResearchSlug] = useState('');

  // Handle Blog Deletion
  async function handleDelete(id: string) {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        setErrorMsg(null);
        const result = await deleteBlog(id);
        if (result?.error) {
          setErrorMsg(result.error);
        } else {
          setSuccessMsg('Blog deleted successfully.');
        }
      } catch (e: any) {
        setErrorMsg(e.message || 'Failed to delete blog.');
      }
    }
  }

  // Handle Research Deletion
  async function handleDeleteResearch(id: string) {
    if (confirm('Are you sure you want to delete this research paper?')) {
      try {
        setErrorMsg(null);
        const result = await deleteResearch(id);
        if (result?.error) {
          setErrorMsg(result.error);
        } else {
          setSuccessMsg('Research publication deleted successfully.');
        }
      } catch (e: any) {
        setErrorMsg(e.message || 'Failed to delete research publication.');
      }
    }
  }

  // Handle Contact Message Deletion
  async function handleDeleteMessage(id: string) {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        setErrorMsg(null);
        const result = await deleteContactMessage(id);
        if (result?.error) {
          setErrorMsg(result.error);
        } else {
          setSuccessMsg('Message deleted successfully.');
        }
      } catch (e: any) {
        setErrorMsg(e.message || 'Failed to delete message.');
      }
    }
  }

  // Blog Form Initial Submission
  function handleInitialSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const titleEn = formData.get('title') as string;
    const titlePt = formData.get('titlePt') as string;
    const fallbackTitle = titleEn || titlePt || 'untitled-blog';

    const baseSlug = fallbackTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    setSuggestedSlug(editingBlog?.slug || baseSlug);

    setPendingFormData(formData);
    setSlugPromptVisible(true);
  }

  // Confirm Blog Slug and Save
  async function confirmAndSubmitSlug(finalSlug: string) {
    if (!pendingFormData) return;
    setSlugPromptVisible(false);
    pendingFormData.set('customSlug', finalSlug);
    await handleSubmit(pendingFormData);
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
        setSuccessMsg('Blog updated successfully!');
      } else {
        const result = await createBlog(formData);
        if (result?.error) {
          setErrorMsg(result.error);
          return;
        }
        setSuccessMsg('Blog published successfully!');
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

  // Research Form Initial Submission
  function handleInitialResearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const titleEn = formData.get('title') as string;
    const titlePt = formData.get('titlePt') as string;
    const fallbackTitle = titleEn || titlePt || 'research-paper';

    const baseSlug = fallbackTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    setSuggestedResearchSlug(editingResearch?.slug || baseSlug);

    setPendingResearchFormData(formData);
    setResearchSlugPromptVisible(true);
  }

  // Confirm Research Slug and Save
  async function confirmAndSubmitResearchSlug(finalSlug: string) {
    if (!pendingResearchFormData) return;
    setResearchSlugPromptVisible(false);
    pendingResearchFormData.set('customSlug', finalSlug);
    await handleResearchSubmit(pendingResearchFormData);
  }

  async function handleResearchSubmit(formData: FormData) {
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      if (editingResearch) {
        const result = await updateResearch(editingResearch.id, formData);
        if (result?.error) {
          setErrorMsg(result.error);
          return;
        }
        setSuccessMsg('Research paper updated successfully!');
      } else {
        const result = await createResearch(formData);
        if (result?.error) {
          setErrorMsg(result.error);
          return;
        }
        setSuccessMsg('Research paper and PDF posted successfully!');
      }
      setIsAddingResearch(false);
      setEditingResearch(null);
      setSelectedFileName(null);
      setSelectedFileSize(null);
    } catch (e: any) {
      console.error(e);
      setErrorMsg(e.message || 'An error occurred while saving research.');
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFileName(file.name);
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedFileSize(`${sizeInMB} MB`);
    } else {
      setSelectedFileName(null);
      setSelectedFileSize(null);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded-md shadow-sm flex justify-between items-center animate-slide-down">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-red-500 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-700 font-medium text-sm">{errorMsg}</p>
            </div>
            <button onClick={() => setErrorMsg(null)} className="text-red-500 hover:text-red-700">✕</button>
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="mb-4 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-md shadow-sm flex justify-between items-center animate-slide-down">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-emerald-500 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-emerald-700 font-medium text-sm">{successMsg}</p>
            </div>
            <button onClick={() => setSuccessMsg(null)} className="text-emerald-500 hover:text-emerald-700">✕</button>
          </div>
        )}

        {/* Top Header Card */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage your blog posts, research publications, and client inquiries
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {activeTab === 'blogs' && (
              <button
                onClick={() => { setIsAdding(true); setEditingBlog(null); }}
                className="bg-[#7749F8] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#59168B] transition-colors shadow-sm"
              >
                + Add New Blog
              </button>
            )}
            {activeTab === 'research' && (
              <button
                onClick={() => {
                  setIsAddingResearch(true);
                  setEditingResearch(null);
                  setSelectedFileName(null);
                  setSelectedFileSize(null);
                }}
                className="bg-[#7749F8] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#59168B] transition-colors shadow-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                + Post Research PDF
              </button>
            )}
            <button
              onClick={() => logout()}
              className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 sm:gap-6 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`pb-3 px-3 font-semibold text-sm transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'blogs'
                ? 'border-[#7749F8] text-[#7749F8]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>Blogs</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold">
              {blogs.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`pb-3 px-3 font-semibold text-sm transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'research'
                ? 'border-[#7749F8] text-[#7749F8]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>Research & PDFs</span>
            <span className="bg-purple-100 text-[#7749F8] px-2 py-0.5 rounded-full text-xs font-bold">
              {research.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`pb-3 px-3 font-semibold text-sm transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'messages'
                ? 'border-[#7749F8] text-[#7749F8]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>Contact Messages</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-bold">
              {messages.length}
            </span>
          </button>
        </div>

        {/* ================= BLOGS TAB ================= */}
        {activeTab === 'blogs' && (
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
                    <td colSpan={4} className="p-8 text-center text-gray-500">
                      No blogs found. Click &quot;+ Add New Blog&quot; to create one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* ================= RESEARCH & PDF TAB ================= */}
        {activeTab === 'research' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 font-semibold text-gray-600 text-sm">Title</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Category</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Author & Date</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">PDF Document</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {research.map((item) => {
                  const pdfLink = item.pdfUrl || `/api/research/${item.slug}/pdf`;
                  return (
                    <tr key={item.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="p-4">
                        <div className="font-semibold text-gray-900">{item.title}</div>
                        {item.titlePt && (
                          <div className="text-xs text-gray-400 mt-0.5">PT: {item.titlePt}</div>
                        )}
                      </td>
                      <td className="p-4 text-sm">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-purple-50 text-[#7749F8] border border-purple-100">
                          {item.category || 'Research'}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500 text-sm">
                        <div>{item.author}</div>
                        <div className="text-xs text-gray-400">{item.date}</div>
                      </td>
                      <td className="p-4 text-sm">
                        <a
                          href={pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7749F8] hover:underline bg-purple-50 hover:bg-purple-100 px-2.5 py-1 rounded-md transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          <span>{item.fileSize ? `PDF (${item.fileSize})` : 'View PDF'}</span>
                        </a>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => {
                            setEditingResearch(item);
                            setSelectedFileName(item.pdfFileName || null);
                            setSelectedFileSize(item.fileSize || null);
                          }}
                          className="text-[#7749F8] hover:text-[#59168B] font-medium text-sm mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteResearch(item.id)}
                          className="text-red-500 hover:text-red-700 font-medium text-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {research.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      No research papers yet. Click &quot;+ Post Research PDF&quot; to upload your first paper!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* ================= MESSAGES TAB ================= */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-4 font-semibold text-gray-600 text-sm">Date</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Name</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Email</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm">Subject</th>
                  <th className="p-4 font-semibold text-gray-600 text-sm text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="p-4 text-gray-500 text-sm whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-gray-900 font-medium">{msg.name}</td>
                    <td className="p-4 text-gray-500 text-sm">
                      <a href={`mailto:${msg.email}`} className="text-[#7749F8] hover:underline">
                        {msg.email}
                      </a>
                    </td>
                    <td className="p-4 text-gray-500 text-sm max-w-xs truncate" title={msg.subject}>
                      {msg.subject}
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => {
                          alert(`Message from ${msg.name}:\n\n${msg.message}`);
                        }}
                        className="text-[#7749F8] hover:text-[#59168B] font-medium text-sm mr-4"
                      >
                        Read
                      </button>
                      <button
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="text-red-500 hover:text-red-700 font-medium text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {messages.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      No contact messages yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ================= BLOG ADD/EDIT MODAL ================= */}
      {(isAdding || editingBlog) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-gray-900">{editingBlog ? 'Edit Blog' : 'Add New Blog'}</h2>
              <button
                onClick={() => { setIsAdding(false); setEditingBlog(null); }}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ✕
              </button>
            </div>
            <form className="p-6 space-y-4" onSubmit={handleInitialSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
                  <input
                    name="title"
                    defaultValue={editingBlog?.title}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title (Portuguese)</label>
                  <input
                    name="titlePt"
                    defaultValue={editingBlog?.titlePt}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                  <input
                    required
                    name="author"
                    defaultValue={editingBlog?.author || 'ZJ Logix Team'}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    required
                    type="date"
                    name="date"
                    defaultValue={editingBlog?.date || new Date().toISOString().split('T')[0]}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Blog Cover Image</h3>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Image URL</label>
                  <input
                    required
                    type="text"
                    name="imageUrl"
                    defaultValue={editingBlog?.image}
                    placeholder="https://example.com/image.jpg"
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-sm text-gray-900 bg-white focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Provide a direct URL to an image (e.g. from ImgBB, Imgur, or cloud storage).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (English)</label>
                  <textarea
                    name="excerpt"
                    defaultValue={editingBlog?.excerpt}
                    rows={2}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Portuguese)</label>
                  <textarea
                    name="excerptPt"
                    defaultValue={editingBlog?.excerptPt}
                    rows={2}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content (English) - Markdown</label>
                  <textarea
                    name="content"
                    defaultValue={editingBlog?.content}
                    rows={8}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 font-mono text-sm focus:ring-[#7749F8] focus:border-[#7749F8]"
                    placeholder="Use Markdown: # Heading, **bold**, - list items, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content (Portuguese) - Markdown</label>
                  <textarea
                    name="contentPt"
                    defaultValue={editingBlog?.contentPt}
                    rows={8}
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 font-mono text-sm focus:ring-[#7749F8] focus:border-[#7749F8]"
                    placeholder="Conteúdo em português..."
                  />
                </div>
              </div>
              <div className="pt-4 flex justify-end gap-3 sticky bottom-0 bg-white border-t border-gray-100 py-4 -mx-6 px-6">
                <button
                  type="button"
                  onClick={() => { setIsAdding(false); setEditingBlog(null); }}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-[#7749F8] text-white rounded-lg hover:bg-[#59168B] font-medium disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= RESEARCH ADD/EDIT MODAL ================= */}
      {(isAddingResearch || editingResearch) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple-100 text-[#7749F8] rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {editingResearch ? 'Edit Research Publication' : 'Post Research & PDF'}
                  </h2>
                  <p className="text-xs text-gray-500">Upload research document, whitepaper, or report</p>
                </div>
              </div>
              <button
                onClick={() => { setIsAddingResearch(false); setEditingResearch(null); }}
                className="text-gray-500 hover:text-gray-700 text-lg"
              >
                ✕
              </button>
            </div>

            <form className="p-6 space-y-4" onSubmit={handleInitialResearchSubmit}>
              {/* Title Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Research Title (English) *
                  </label>
                  <input
                    name="title"
                    defaultValue={editingResearch?.title}
                    required
                    placeholder="e.g. Monte Carlo Risk Distribution in Portfolio Assets"
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Research Title (Portuguese)
                  </label>
                  <input
                    name="titlePt"
                    defaultValue={editingResearch?.titlePt}
                    placeholder="e.g. Distribuição de Risco de Monte Carlo em Carteiras"
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
              </div>

              {/* Author, Category, Date */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Category *</label>
                  <input
                    name="category"
                    list="research-categories"
                    defaultValue={editingResearch?.category || 'Data Analytics'}
                    required
                    placeholder="Select or type..."
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                  <datalist id="research-categories">
                    <option value="Data Analytics" />
                    <option value="Financial Modeling" />
                    <option value="Decision Optimization" />
                    <option value="Monte Carlo & Simulation" />
                    <option value="Whitepapers" />
                    <option value="Supply Chain Optimization" />
                    <option value="Strategic Advisory" />
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Author / Lead *</label>
                  <input
                    name="author"
                    defaultValue={editingResearch?.author || 'Zainab Jamshed'}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Publication Date *</label>
                  <input
                    type="date"
                    name="date"
                    defaultValue={editingResearch?.date || new Date().toISOString().split('T')[0]}
                    required
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
              </div>

              {/* PDF Document Upload Box */}
              <div className="bg-purple-50/50 p-5 rounded-2xl border-2 border-dashed border-purple-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-red-100 text-red-600 rounded-md">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">PDF Document Source</h3>
                    <p className="text-xs text-gray-500">Upload a PDF file directly OR provide an external link</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* File Upload Option */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col justify-between">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Option 1: Upload PDF File
                      </label>
                      <input
                        type="file"
                        name="pdfFile"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        className="block w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-[#7749F8] hover:file:bg-purple-100 cursor-pointer"
                      />
                    </div>
                    {(selectedFileName || editingResearch?.pdfFileName) && (
                      <div className="mt-3 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 flex items-center justify-between">
                        <span className="truncate max-w-[200px]">
                          📄 {selectedFileName || editingResearch?.pdfFileName}
                        </span>
                        <span>{selectedFileSize || editingResearch?.fileSize}</span>
                      </div>
                    )}
                  </div>

                  {/* URL Option */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Option 2: External PDF Link
                    </label>
                    <input
                      type="url"
                      name="pdfUrl"
                      defaultValue={editingResearch?.pdfUrl}
                      placeholder="https://example.com/research-paper.pdf"
                      className="w-full border border-gray-300 rounded-lg p-2 text-xs text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8]"
                    />
                    <p className="text-[11px] text-gray-400 mt-1">
                      Google Drive, Dropbox, or public cloud storage link.
                    </p>
                  </div>
                </div>
              </div>

              {/* Excerpt / Abstract */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Executive Abstract (English) *
                  </label>
                  <textarea
                    name="excerpt"
                    defaultValue={editingResearch?.excerpt}
                    rows={3}
                    required
                    placeholder="Provide a concise 2-3 sentence abstract of this research paper..."
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Executive Abstract (Portuguese)
                  </label>
                  <textarea
                    name="excerptPt"
                    defaultValue={editingResearch?.excerptPt}
                    rows={3}
                    placeholder="Resumo executivo do artigo em português..."
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-[#7749F8] focus:border-[#7749F8] text-sm"
                  />
                </div>
              </div>

              {/* Detailed Methodology / Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Detailed Methodology / Analysis (English) - Markdown
                  </label>
                  <textarea
                    name="description"
                    defaultValue={editingResearch?.description}
                    rows={6}
                    placeholder="Detailed findings, mathematical formulations, or protocol summary in Markdown..."
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 font-mono text-xs focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Detailed Methodology / Analysis (Portuguese) - Markdown
                  </label>
                  <textarea
                    name="descriptionPt"
                    defaultValue={editingResearch?.descriptionPt}
                    rows={6}
                    placeholder="Metodologia detalhada e descobertas em português..."
                    className="w-full border border-gray-300 rounded-lg p-2.5 text-gray-900 font-mono text-xs focus:ring-[#7749F8] focus:border-[#7749F8]"
                  />
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="pt-4 flex justify-end gap-3 sticky bottom-0 bg-white border-t border-gray-100 py-4 -mx-6 px-6">
                <button
                  type="button"
                  onClick={() => { setIsAddingResearch(false); setEditingResearch(null); }}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2 bg-[#7749F8] text-white rounded-lg hover:bg-[#59168B] font-medium disabled:opacity-50"
                >
                  Next →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= BLOG SLUG CONFIRMATION MODAL ================= */}
      {slugPromptVisible && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#7749F8] text-white">
              <h2 className="text-xl font-bold">Confirm Blog URL Slug</h2>
              <button onClick={() => setSlugPromptVisible(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Choose the URL slug for your blog post:
              </p>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#7749F8]">
                  <div className="bg-gray-50 px-3 py-2.5 text-gray-500 text-sm border-r border-gray-300 select-none">
                    /blogs/
                  </div>
                  <input
                    type="text"
                    value={suggestedSlug}
                    onChange={(e) => setSuggestedSlug(e.target.value)}
                    className="w-full p-2.5 text-gray-900 focus:outline-none text-sm"
                    placeholder="my-blog-post"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSlugPromptVisible(false)}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => confirmAndSubmitSlug(suggestedSlug)}
                  className="px-5 py-2.5 bg-[#7749F8] text-white rounded-lg hover:bg-[#59168B] font-medium shadow-md transition-colors"
                >
                  Publish Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= RESEARCH SLUG CONFIRMATION MODAL ================= */}
      {researchSlugPromptVisible && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#7749F8] text-white">
              <h2 className="text-xl font-bold">Confirm Research URL Slug</h2>
              <button onClick={() => setResearchSlugPromptVisible(false)} className="text-white hover:text-gray-200">✕</button>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Choose the public URL slug for this research paper:
              </p>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">URL Slug</label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#7749F8]">
                  <div className="bg-gray-50 px-3 py-2.5 text-gray-500 text-sm border-r border-gray-300 select-none">
                    /research/
                  </div>
                  <input
                    type="text"
                    value={suggestedResearchSlug}
                    onChange={(e) => setSuggestedResearchSlug(e.target.value)}
                    className="w-full p-2.5 text-gray-900 focus:outline-none text-sm"
                    placeholder="my-research-paper"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setResearchSlugPromptVisible(false)}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => confirmAndSubmitResearchSlug(suggestedResearchSlug)}
                  className="px-5 py-2.5 bg-[#7749F8] text-white rounded-lg hover:bg-[#59168B] font-medium shadow-md transition-colors"
                >
                  Publish Research & PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
