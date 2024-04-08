import { motion } from "framer-motion";

const transition = (OriginalComponent: any) => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className="transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: .1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="transition"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default transition;