import { Icon } from "@iconify/react/dist/iconify.js";

const Preloader = () => {
    return (
      <div className="st-preloader h-screen flex justify-center items-center">
        <Icon icon="svg-spinners:pulse-3" className='text-5xl'/>
      </div>
    );
  };
  
  export default Preloader;