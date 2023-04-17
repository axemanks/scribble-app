import { ArrowUpCircle } from "lucide-react";


const BackToTopButton = () => {
    const handleClick = () => {
      console.log('Button clicked!');
      window.location.href = '#top';
    };
  
    return (
        <div className="flex-center button holder w-full">
      <button className="flex-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Go to Top      
            <ArrowUpCircle className="icon ml-2" /></button>
        </div>
    );
  };
  
  export default BackToTopButton;
  