import React from "react";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        inline-flex 
        items-center 
        justify-center 
        px-4 py-2 
        rounded-md 
        text-white 
        font-medium 
        focus:outline-none 
        transition 
        duration-150
        cursor-pointer
      `}
      style={{
        background: "linear-gradient(90deg, #FF8702 0%, #FD4303 100%)",
        // width: "142px",
        // height: "40px",
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;
