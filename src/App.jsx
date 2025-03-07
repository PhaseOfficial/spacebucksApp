import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import ClientDetails from "./pages/ClientDetails";
import SpouseDetails from "./pages/SpouseDetails";
import NextOfKinDetails from "./pages/NextOfKinDetails";
import BusinessDetails from "./pages/BusinessDetails";
import LoanDetails from "./pages/LoanDetails";
import BusinessReferees from "./pages/BusinessReferees";
import SupplierCreditReferences from "./pages/SupplierCreditReferences";
import BankingDetails from "./pages/BankingDetails";
import BranchSelection from "./pages/BranchSelection";
import Declaration from "./pages/Declaration";
import './index.css'; // Ensure your Tailwind CSS file is imported
import Logo from "../src/assets/spacebucks submark.png";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2 justify-center p-4">
          <img src={Logo} alt="Logo 1" className="h-15 " />
          <span className="font-bold text-xl">SpaceBucks</span>
        </div>

        {/* Responsive Navigation Tabs */}
        <nav className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
          <NavLink
            to="/client-details"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Client Details
          </NavLink>
          <NavLink
            to="/spouse-details"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Spouse Details
          </NavLink>
          <NavLink
            to="/next-of-kin-details"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Next of Kin Details
          </NavLink>
          <NavLink
            to="/business-details"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Business Details
          </NavLink>
          <NavLink
            to="/loan-details"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Loan Details
          </NavLink>
          <NavLink
            to="/business-referees"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Business Referees
          </NavLink>
          <NavLink
            to="/supplier-credit-references"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Supplier Credit References
          </NavLink>
          <NavLink
            to="/banking-details"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Banking Details
          </NavLink>
          <NavLink
            to="/branch-selection"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Branch Selection
          </NavLink>
          <NavLink
            to="/declaration"
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 bg-gray-600 text-white rounded"
                : "px-4 py-2 bg-white text-blue-500 border border-blue-500 rounded"
            }
          >
            Declaration
          </NavLink>
        </nav>

        {/* Define Routes */}
        <main className="p-6">
          <Routes>
            <Route path="/client-details" element={<ClientDetails />} />
            <Route path="/spouse-details" element={<SpouseDetails />} />
            <Route path="/next-of-kin-details" element={<NextOfKinDetails />} />
            <Route path="/business-details" element={<BusinessDetails />} />
            <Route path="/loan-details" element={<LoanDetails />} />
            <Route path="/business-referees" element={<BusinessReferees />} />
            <Route
              path="/supplier-credit-references"
              element={<SupplierCreditReferences />}
            />
            <Route path="/banking-details" element={<BankingDetails />} />
            <Route path="/branch-selection" element={<BranchSelection />} />
            <Route path="/declaration" element={<Declaration />} />
            {/* Redirect unknown paths to ClientDetails */}
            <Route path="*" element={<ClientDetails />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;