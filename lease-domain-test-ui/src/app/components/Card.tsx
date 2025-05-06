import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  description: string;
  additionalInfo: string;
  pendingText?: string;
  borderColor?: string;
}

export default function Card({
  title,
  icon,
  description,
  additionalInfo,
  pendingText,
  borderColor = "border-gray-300",
}: CardProps) {
  return (
    <div className={`border ${borderColor} rounded-lg p-4 bg-white shadow`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          {icon} {title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <p className="text-sm text-gray-600">{additionalInfo}</p>
      {pendingText && (
        <p className="text-sm text-red-600 mt-2">{pendingText}</p>
      )}
    </div>
  );
}
