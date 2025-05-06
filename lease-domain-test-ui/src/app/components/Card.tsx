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
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-3xl">{icon}</span>
        </h3>
        <h4 className="font-semibold text-gray-800">{title}</h4>
      </div>
      <div className="flex flex-col items-center gap-2 mt-2">
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-sm text-gray-600 font-bold">{additionalInfo}</p>
        {pendingText && (
          <p className="text-sm text-red-600 mt-2">{pendingText}</p>
        )}
      </div>
    </div>
  );
}
