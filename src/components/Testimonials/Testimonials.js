import quotes from '../../images/bg-quotes.png';
import img1 from '../../images/profile-1.jpg'
import img2 from '../../images/profile-2.jpg'
import img3 from '../../images/profile-3.jpg'
import Testo from './Testo';

const Testimonials = ()=>{
    return(<section id="testimonials" class="bg-gray-50 dark:bg-darkBlue">
    {/* <!-- Testimonials Container --> */}
    <div class="container mx-auto px-6 pt-12 pb-80 md:pb-96">
      {/* <!-- Boxes Container --> */}
      <div
        class="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12"
      >
        {/* <!-- Quotes Image --> */}
        <img
          src={quotes}
          alt=""
          class="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
        />

        {/* <!-- Boxes --> */}
        <Testo text=' Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' profile={img1} name='Satish Patel' job='Founder & CEO. Huddle' />
        <Testo text=' Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' profile={img2} name='Bruce McKenzie' job='Founder & CEO. Huddle 2' />
        <Testo text=' Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.' profile={img3} name='Eva Boyd' job='Founder & CEO. Huddle 3' />

        
      </div>
    </div>
  </section>)
};
export default Testimonials;