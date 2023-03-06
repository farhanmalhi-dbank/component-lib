export const generateUniqueId = () => {
  const timestamp = Date.now();
  const performanceNow = performance.now();
  return `${timestamp}-${performanceNow}`;
};
