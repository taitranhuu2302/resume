import { MdOutlineArrowRight } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <div id="about" className="container-ct">
      <div className="section-header">
        <AnimationOnScroll animateIn="animate__zoomIn">
          <h2 className="section-title">Về Tôi</h2>
          <p className="text-center paragraph px-5">
            "Bạn không cần phải là một thiên tài, hay một người có tầm nhìn, hay thậm chí tốt nghiệp
            đại học để thành công. Bạn chỉ cần có nền tảng và ước mơ" -{" "}
            <span className="font-semibold">Michael Dell</span>
          </p>
        </AnimationOnScroll>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <AnimationOnScroll animateIn="animate__slideInLeft">
          <div className="flex lg:justify-start justify-center">
            <img
              src="/avatar.png"
              alt=""
              className="max-w-[416px] max-h-[416px] min-w-[416px] min-h-[416px] rounded"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__slideInRight">
          <div className="flex-grow">
            <h3 className="section-sub-title">Web Developer ( Front-end ) </h3>
            <div className="grid grid-cols-2 gap-5 my-5">
              <Info name={"Họ và tên"} value={"Trần Hữu Tài"} />
              <Info name={"Ngày sinh"} value={"23/02/2002"} />
              <Info name={"Số Điện thoại"} value={"0931983495"} />
              <Info name={"Email"} value={"tai.tranhuu2002@gmail.com"} />
              <Info name={"Thành phố"} value={"Thành phố Huế"} />
              <Info name={"Quốc gia"} value={"Việt Nam"} />
            </div>
            <p className="text-justify paragraph">
              Tôi là một lập trình viên front-end web developer, đang học tập và làm việc tại Thành
              phố Huế. Tôi là một người làm việc theo nhóm, luôn sẵn sàng giúp đỡ và tôi tự tin vào
              khả năng đóng góp của mình cho bất kỳ dự án nào. Tôi đang tìm kiếm cơ hội sử dụng các
              kỹ năng và kinh nghiệm của mình để tạo ra tác động tích cực trên web và tôi trong hành
              trình trở thành Fullstack Developer
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

type InfoType = {
  name: string;
  value: string;
};

const Info = ({ name, value }: InfoType) => {
  return (
    <div className="flex items-center flex-nowrap gap-1">
      <MdOutlineArrowRight className="text-primary min-w-[15px] min-h-[15px]" />
      <p>
        <span className="font-bold text-color">{name}</span>: <span>{value}</span>
      </p>
    </div>
  );
};

export default About;
