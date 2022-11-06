import img1 from "../../images/icon-access-anywhere.svg";
import img2 from "../../images/icon-security.svg";
import img3 from "../../images/icon-collaboration.svg";
import img4 from "../../images/icon-any-file.svg";
import Items from "./Items";
const Features = () => {
  return (
    <section id="features" class="pt-12 bg-gray-50 dark:bg-darkBlue1">
      {/* <!-- Features Container --> */}
      <div class="container mx-auto px-6 pb-32">
        {/* <!-- First Row --> */}
        <div class="grid gap-8 md:grid-cols-2 text-center">
          {/* <!-- Items --> */}
           <Items img={img1} title='Access your file from anywhere' subtitle='The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.' />
           <Items img={img2} title='Security you can trust' subtitle='2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.' />
           <Items img={img3} title='Access your file from anywhere' subtitle=' The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.' />
           <Items img={img4} title='Security you can trust' subtitle="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files." />  
             </div>

        </div>

    </section>
  );
};
export default Features;
