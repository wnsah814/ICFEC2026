import React, { useState } from 'react';
import { IMPORTANT_DATES } from '@/constants/dates';
import { NOTICES, type Notice } from '@/data/notices';

const NoticeAndDates: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const openModal = (notice: Notice) => {
    setSelectedNotice(notice);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedNotice(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 py-16 md:py-24 px-2 md:px-8">
      {/* Announcements */}
      <div className="flex-1 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold mb-5 text-blue-900">Announcements</h2>
        <ul className="space-y-4 max-h-[280px] overflow-y-auto pr-1">
          {NOTICES.map((notice, idx) => (
            <li
              key={idx}
              className="border-l-4 border-blue-500 pl-4 py-2 cursor-pointer hover:bg-blue-50/60 rounded transition"
              onClick={() => openModal(notice)}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-blue-800">{notice.title}</span>
                <span className="text-xs text-gray-400">{notice.date}</span>
              </div>
              <div className="text-gray-600 text-sm line-clamp-1">{notice.content}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* Important Dates */}
      <div className="flex-1 bg-blue-50/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">Important Dates</h2>
        <ul className="space-y-5">
          {IMPORTANT_DATES.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center border-b border-blue-100 pb-3 last:border-b-0">
              <span className="font-medium text-blue-800 text-base md:text-lg">{item.label}</span>
              {item.oldDate ? (
                <div className="text-right ml-4">
                  <div className="text-gray-400 text-sm line-through">{item.oldDate}</div>
                  <div className="text-red-600 text-sm md:text-base font-semibold">{item.date}</div>
                </div>
              ) : (
                <span className="text-gray-700 text-sm md:text-base ml-4 whitespace-nowrap">{item.date}</span>
              )}
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