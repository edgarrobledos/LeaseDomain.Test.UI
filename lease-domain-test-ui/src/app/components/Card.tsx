import { ReactNode } from "react";
import { FaCheck } from "react-icons/fa";

interface CardProps {
  title: string;
  icon: ReactNode;
  description: string;
  additionalInfo: string;
  pendingText?: string;
  borderColor?: string;
  onSelect?: () => void;
  isSelected?: boolean;
}

export default function Card({
  title,
  icon,
  description,
  additionalInfo,
  pendingText,
  borderColor = "border-gray-300",
  onSelect,
  isSelected = false,
}: CardProps) {
  return (
    <div
      className={`border ${
        isSelected ? "border-green-500" : borderColor
      } rounded-lg p-4 bg-white shadow`}
      onClick={onSelect}
    >
      <div className="flex flex-col items-center gap-4">
        <h3
          className={`text-lg font-semibold ${
            isSelected ? "text-green-600" : "text-gray-800"
          } flex items-center gap-2`}
        >
          <span className="text-3xl">
            {isSelected ? <FaCheck className="text-green-600" /> : icon}
          </span>
        </h3>
        <h4
          className={`font-semibold ${
            isSelected ? "text-green-600" : "text-gray-800"
          }`}
        >
          {title}
        </h4>
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
