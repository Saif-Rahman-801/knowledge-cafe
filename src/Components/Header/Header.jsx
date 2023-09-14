import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center border-b-2 my-5 p-2">
      <h4 className="font-bold text-3xl">Knowledge Cafe</h4>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
