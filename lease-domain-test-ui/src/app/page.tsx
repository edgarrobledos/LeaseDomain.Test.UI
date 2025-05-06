import Image from "next/image";
import { FaDog, FaCar, FaBox, FaBicycle } from "react-icons/fa";

export default function LeaseAddOns() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-red-600">Lease Add-Ons</h1>
        <p className="text-gray-700">Welcome, Daisy!</p>
        <p className="text-sm text-gray-500 mt-1">
          Avalon at Hackensack at Riverside • Apartment 201-343 • 2 bedrooms • 2
          baths • 919 Sq.ft
        </p>
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
          <div className="border border-green-500 rounded-lg p-4 bg-white shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <FaDog className="text-green-600" /> Pets
              </h3>
              <span className="text-green-600 text-2xl">✔</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">$35 / mo / pet</p>
            <p className="text-sm text-gray-600">$300 deposit increase</p>
            <p className="text-sm text-red-600 mt-2">1 pending</p>
          </div>

          <div className="border rounded-lg p-4 bg-white shadow">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaCar className="text-gray-600" /> Parking
            </h3>
            <p className="text-sm text-gray-600 mt-2">$15 - $250</p>
            <p className="text-sm text-gray-600">You have 0</p>
          </div>

          <div className="border rounded-lg p-4 bg-white shadow">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaBox className="text-gray-600" /> Storage
            </h3>
            <p className="text-sm text-gray-600 mt-2">$25 - $40</p>
            <p className="text-sm text-gray-600">You have 0</p>
          </div>

          <div className="border rounded-lg p-4 bg-white shadow">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaBicycle className="text-gray-600" /> Bike Storage
            </h3>
            <p className="text-sm text-gray-600 mt-2">$25</p>
            <p className="text-sm text-gray-600">You have 0</p>
          </div>
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
