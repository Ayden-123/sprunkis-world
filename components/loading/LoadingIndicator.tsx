"use client"
import { useLoading } from './LoadingContext';

const LoadingIndicator = () => {
  const { isLoading, loadingText } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 flex justify-center p-4 bg-white rounded-lg shadow-md items-center">
      <span className="loading loading-spinner loading-xs text-home_main_bg"></span>
      <div className="text-home_main_bg px-3 text-sm">{loadingText}</div>
    </div>
  );
};

export default LoadingIndicator;