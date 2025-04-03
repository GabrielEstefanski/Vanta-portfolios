import React from 'react';
import { motion } from 'framer-motion';
import { TemplateConfig } from '@/app/types/TemplateConfig';

interface HistoryEntry {
  id: string;
  timestamp: Date;
  config: TemplateConfig;
  description: string;
}

interface TemplateHistoryProps {
  history: HistoryEntry[];
  onRestore: (entry: HistoryEntry) => void;
  onClose: () => void;
}

export function TemplateHistory({ history, onRestore, onClose }: TemplateHistoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Histórico de Alterações</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {history.map((entry) => (
              <div
                key={entry.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <p className="font-medium">{entry.description}</p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {entry.timestamp.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => onRestore(entry)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Restaurar
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
} 