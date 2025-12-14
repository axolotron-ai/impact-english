'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CTAButton() {
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://72.61.239.175:8000/api/cta/active')
      .then((response) => response.json())
      .then((result) => {
        if (result.success && result.data) {
          setCtaData(result.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching CTA:', error);
        setLoading(false);
      });
  }, []);

  if (loading || !ctaData) {
    return null;
  }

  return (
    <motion.a
      href={ctaData.button_link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-xl border-2 border-black text-xl font-semibold hover:shadow-md hover:bg-green-400 hover:text-white duration-100 hover:border-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {ctaData.button_name}
    </motion.a>
  );
}
