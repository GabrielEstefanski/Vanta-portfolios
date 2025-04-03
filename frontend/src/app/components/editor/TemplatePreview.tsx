import React from 'react';
import { motion } from 'framer-motion';
import { TemplateConfig } from '@/app/types/TemplateConfig';
import { MinimalistTemplate } from '../templates/MinimalistTemplate';

interface TemplatePreviewProps {
  config: TemplateConfig;
}

export function TemplatePreview({ config }: TemplatePreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-white dark:bg-gray-900 z-40"
    >
      <div className="absolute inset-0 overflow-y-auto">
        <MinimalistTemplate config={config} />
      </div>
    </motion.div>
  );
} 