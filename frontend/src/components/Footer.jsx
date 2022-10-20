import logo from "@assets/footer.png";

function Footer() {
  return (
    <footer className="mt-auto bg-black p-5 text-gray-100 flex flex-col items-center">
      <img src={logo} alt="" className="h-20 w-20" />
      <div className="text-center">
        &copy; {new Date().getFullYear()} Let's do eat.{" "}
        <div className="md:inline">All right reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
