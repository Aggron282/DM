// components/QuoteLoadingOverlay.js
import "./../../css/pricing/quote.css";

function QuoteLoadingOverlay() {
  return (
    <div className="quote-loading-overlay">
      <div className="quote-loading-box">
        <div className="loader"></div>
        <p>Processing your quote, should take 10-15 seconds....</p>
      </div>
    </div>
  );
}

export default QuoteLoadingOverlay;
