import React, { useState } from 'react';

const notices = [
  {
    title: 'Welcome to IEEE ICFEC 2026!',
    date: '2025-05-28',
    content: 'The conference website is now live. Stay tuned for updates!'
  },
  {
    title: 'Call for Papers Open',
    date: '2025-05-29',
    content: 'Paper submission is now open. Check the Call for Papers section for details.'
  },
];

const importantDates = [
  { label: 'Paper Submission Deadline', date: '9th January 2026' },
  { label: 'Notification of Acceptance', date: '16th February 2026' },
  { label: 'Camera-Ready Due', date: '15th March 2026' },
  { label: 'Conference Dates', date: '18-21 May 2026' },
];

const NoticeAndDates: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<typeof notices[0] | null>(null);

  const openModal = (notice: typeof notices[0]) => {
    setSelectedNotice(notice);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNotice(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 py-16 md:py-24 px-2 md:px-8">
      {/* Notices */}
      <div className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 min-h-[340px]">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Notices</h2>
        <ul className="space-y-6">
          {notices.map((notice, idx) => (
            <li
              key={idx}
              className="border-l-4 border-blue-500 pl-5 py-2 cursor-pointer hover:bg-blue-50/60 rounded transition"
              onClick={() => openModal(notice)}
            >
              <div className="text-sm text-gray-500 mb-1">{notice.date}</div>
              <div className="font-semibold text-blue-800 mb-1">{notice.title}</div>
              <div className="text-gray-700 text-sm line-clamp-2">{notice.content}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* Important Dates */}
      <div className="flex-1 bg-blue-50/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 min-h-[340px]">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Important Dates</h2>
        <ul className="space-y-5">
          {importantDates.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center border-b border-blue-100 pb-3 last:border-b-0">
              <span className="font-medium text-blue-800 text-base md:text-lg">{item.label}</span>
              <span className="text-gray-700 text-sm md:text-base ml-4 whitespace-nowrap">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for notice details */}
      {modalOpen && selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-2xl w-full mx-4 relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-3xl font-bold"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="text-base text-gray-500 mb-3">{selectedNotice.date}</div>
            <div className="font-bold text-blue-900 text-3xl mb-5">{selectedNotice.title}</div>
            <div className="text-gray-800 text-lg whitespace-pre-line">{selectedNotice.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeAndDates;