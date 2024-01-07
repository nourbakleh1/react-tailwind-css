import icon1 from "../assets/images/icon-access-anywhere.svg";

import icon2 from "../assets/images/icon-security.svg";
import icon3 from "../assets/images/icon-collaboration.svg";
import icon4 from "../assets/images/icon-any-file.svg";


function Features() {
 


  
  return (
    <section className="pb-[150px]">
      <div className="container ">
        <div
          className=" grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] max-w-full mx-auto
    "
        >
      <div className="text-white element-center flex-col text-center">
      <img
        src={icon1}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"/>
      <h4 className="text-xl font-semibold my-[15px]">Acces your files,anywhere</h4>
      <p className="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
    </div>

    <div className="text-white element-center flex-col text-center">
      <img
        src={icon2}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"/>
      <h4 className="text-xl font-semibold my-[15px]">Security you can trust</h4>
      <p className="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
    </div>

    <div className="text-white element-center flex-col text-center">
      <img
        src={icon3}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"/>
      <h4 className="text-xl font-semibold my-[15px]">Real-time collaboration</h4>
      <p className="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
    </div>

    <div className="text-white element-center flex-col text-center">
      <img
        src={icon4}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"/>
      <h4 className="text-xl font-semibold my-[15px]">Store any type of file</h4>
      <p className="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.</p>
    </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
