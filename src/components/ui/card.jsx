
import PropTypes from 'prop-types';

// Card component structure
export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-800 border-gray-700 p-6 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// CardHeader component for the top section of the card
export const CardHeader = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

// CardTitle component for the title of the card
export const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-semibold text-white text-center ${className}`}>
      {children}
    </h3>
  );
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// CardContent component for the body of the card
export const CardContent = ({ children }) => {
  return <div className="px-4 py-2">{children}</div>;
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

// CardDescription component for the description in the card
export const CardDescription = ({ children, className = '' }) => {
  return (
    <p className={`text-gray-300 text-center ${className}`}>
      {children}
    </p>
  );
};

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
