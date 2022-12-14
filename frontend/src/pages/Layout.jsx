import Header from "@components/Header";
import Footer from "@components/Footer";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-1 md:gap-3 md:grid-cols-3 my-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
