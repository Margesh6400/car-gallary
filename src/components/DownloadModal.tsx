import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ImageIcon } from 'lucide-react';
import { Wallpaper } from '../types';

interface DownloadModalProps {
  wallpaper: Wallpaper;
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ wallpaper, isOpen, onClose }) => {
  const [selectedResolution, setSelectedResolution] = useState('original');
  const [isDownloading, setIsDownloading] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const resolutions = [
    { id: 'original', label: 'Original Resolution', value: wallpaper.resolution || '2560 × 1707' },
    { id: '4k', label: '4K Ultra HD', value: '3840 × 2160' },
    { id: '2k', label: '2K', value: '2560 × 1440' },
    { id: 'fhd', label: 'Full HD', value: '1920 × 1080' },
    { id: 'hd', label: 'HD', value: '1280 × 720' },
  ];

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(wallpaper.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${wallpaper.make}-${wallpaper.model}-${wallpaper.year}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      onClose();
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl max-h-[90vh] bg-dark-300 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="sticky top-0 z-10 p-6 border-b border-gray-700 bg-dark-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-white">Download Wallpaper</h3>
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-6" style={{ maxHeight: 'calc(90vh - 180px)' }}>
                  {/* Preview */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-dark-400 mb-6">
                    <img
                      src={wallpaper.imageUrl}
                      alt={wallpaper.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-white font-medium">{wallpaper.title}</h4>
                      <p className="text-sm text-gray-300">{wallpaper.make} {wallpaper.model} • {wallpaper.year}</p>
                    </div>
                  </div>

                  {/* Resolution Selection */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium text-white">Select Resolution</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {resolutions.map((resolution) => (
                        <button
                          key={resolution.id}
                          onClick={() => setSelectedResolution(resolution.id)}
                          className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                            selectedResolution === resolution.id
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-gray-700 hover:border-gray-600'
                          }`}
                        >
                          <div>
                            <div className="font-medium text-white">{resolution.label}</div>
                            <div className="text-sm text-gray-400">{resolution.value}</div>
                          </div>
                          <ImageIcon size={20} className="text-gray-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer - Fixed at bottom */}
                <div className="sticky bottom-0 z-10 p-6 border-t border-gray-700 bg-dark-300 flex justify-end space-x-3">
                  <button
                    onClick={onClose}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="btn btn-primary flex items-center space-x-2"
                  >
                    <Download size={18} />
                    <span>{isDownloading ? 'Downloading...' : 'Download'}</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DownloadModal;