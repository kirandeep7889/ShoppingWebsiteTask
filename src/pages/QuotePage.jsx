import React from "react";
import { QuoteModal } from "../components/QuoteModal"; // Adjust path if needed
import { useNavigate } from "react-router-dom";

const QuotePage = () => {
    const navigate = useNavigate();
  return (
    <div className="h-screen ">
      <QuoteModal isOpen={true} onClose={() => navigate('/')} />
    </div>
  );
};

export default QuotePage;
