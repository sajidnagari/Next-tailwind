import { ReactNode, FC } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonComponent: FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-150 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
