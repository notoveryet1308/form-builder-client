import { Link } from "@tanstack/react-router";

const ProductLogo = () => {
  return (
    <div
      className="border-t-0 border-l-0 border-solid border-4 border-tertiary-border
      text-white bg-primary-bg flex items-start rounded-tl-[8px] rounded-br-[8px] rounded-bl-[4px] rounded-tr-[4px]"
    >
      <Link to="/" className="p-2">
        <h2 className="">Snapform</h2>
      </Link>
    </div>
  );
};

export default ProductLogo;
