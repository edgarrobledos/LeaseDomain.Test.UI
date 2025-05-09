"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import { FaDog, FaCar, FaBox, FaBicycle } from "react-icons/fa";
import { LeaseSummary } from "@/types/leaseSummary";

export default function LeaseAddOns() {
  const [selectedCard, setSelectedCard] = useState<string | null>();
  const [leaseSummary, setLeaseSummary] = useState<LeaseSummary>();

  useEffect(() => {
    const fetchLeaseSummary = async () => {
      try {
        const response = await fetch("/leases/summary", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch lease summary");
        }
        const data = await response.json();

        setLeaseSummary(data);
      } catch (error) {
        console.error("Error fetching lease summary:", error);
      }
    };

    fetchLeaseSummary();
  }, []);

  const handleCardSelect = (cardTitle: string) => {
    setSelectedCard(selectedCard === cardTitle ? null : cardTitle);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="grid grid-cols-2 gap-4 border-b border-gray-300 pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-red-600">Lease Add-Ons</h1>
          <p className="text-gray-700">
            Welcome, {leaseSummary?.resident.first_name}!
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">
            Avalon at Hackensack at Riverside
            <br />
            Apartment 201-343
            <br />2 bedrooms • 2 baths • 919 Sq.ft
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Select Your Add-Ons
          </h2>
          <p className="text-gray-600 mt-2">
            Please select which items you would like to add, remove, or change.
          </p>
          <p className="text-gray-600 mt-1">
            Please review & generate your lease to submit your pending changes.
            All parties must sign this agreement for your changes to take
            effect.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Time remaining before inventory is released:
            </span>
            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
              23:22:21
            </span>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card
            title="Pets"
            icon={
              <FaDog
                className={
                  selectedCard === "Pets" ? "text-green-600" : "text-gray-600"
                }
              />
            }
            description="$35 / mo / pet"
            additionalInfo="$300 deposit increase"
            pendingText="1 pending"
            isSelected={selectedCard === "Pets"}
            borderColor={
              selectedCard === "Pets" ? "border-green-500" : "border-gray-300"
            }
            onSelect={() => handleCardSelect("Pets")}
          />
          <Card
            title="Parking"
            icon={
              <FaCar
                className={
                  selectedCard === "Parking"
                    ? "text-green-600"
                    : "text-gray-600"
                }
              />
            }
            description="$15 - $250"
            additionalInfo="You have 0"
            borderColor={
              selectedCard === "Parking"
                ? "border-green-500"
                : "border-gray-300"
            }
            isSelected={selectedCard === "Parking"}
            onSelect={() => handleCardSelect("Parking")}
          />
          <Card
            title="Storage"
            icon={
              <FaBox
                className={
                  selectedCard === "Storage"
                    ? "text-green-600"
                    : "text-gray-600"
                }
              />
            }
            description="$25 - $40"
            additionalInfo="You have 0"
            borderColor={
              selectedCard === "Storage"
                ? "border-green-500"
                : "border-gray-300"
            }
            isSelected={selectedCard === "Storage"}
            onSelect={() => handleCardSelect("Storage")}
          />
          <Card
            title="Bike Storage"
            icon={
              <FaBicycle
                className={
                  selectedCard === "Bike Storage"
                    ? "text-green-600"
                    : "text-gray-600"
                }
              />
            }
            description="$25"
            isSelected={selectedCard === "Bike Storage"}
            additionalInfo="You have 0"
            borderColor={
              selectedCard === "Bike Storage"
                ? "border-green-500"
                : "border-gray-300"
            }
            onSelect={() => handleCardSelect("Bike Storage")}
          />
        </section>

        <div className="flex justify-between items-center mt-8">
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
            Cancel and Exit
          </button>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
              Save for Later
            </button>
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
              Review & Generate Lease
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
