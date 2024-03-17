const StockStatus = ({ instock, className }) => {
  const stockClass = instock ? 'green' : 'red';
  
  // Combine stockClass with any additional classes passed via className prop
  const combinedClassName = `stock-status ${className}`;

  return (
    <div className={combinedClassName}>
      <span className={stockClass}>
        {instock ? 'In Stock' : 'Out of Stock'}
      </span>
    </div>
  );
};

export default StockStatus;