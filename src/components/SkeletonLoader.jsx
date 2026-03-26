import { motion } from 'framer-motion';

export function CardSkeleton() {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-navy-light"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="h-64 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-navy-light dark:to-navy" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-navy rounded-lg" />
        <div className="h-4 bg-gray-300 dark:bg-navy rounded-lg w-5/6" />
        <div className="h-4 bg-gray-300 dark:bg-navy rounded-lg w-4/6" />
      </div>
    </motion.div>
  );
}

export function GridSkeleton({ count = 3, cols = 3 }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-8`}>
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function TextSkeleton({ lines = 3 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-gray-300 dark:bg-navy rounded-lg"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          style={{ width: i === lines - 1 ? '80%' : '100%' }}
        />
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5, cols = 4 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className="flex gap-4">
          {Array.from({ length: cols }).map((_, col) => (
            <motion.div
              key={col}
              className="h-8 bg-gray-300 dark:bg-navy rounded-lg flex-1"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: (row + col) * 0.05 }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardSkeleton;
