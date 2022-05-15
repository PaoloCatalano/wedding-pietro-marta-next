import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout">
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            padding: `var(--space-4) var(--size-gutter)`,
          }}
        >
          <a
            href="https://paolo-deveb.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            deveb© {new Date().getFullYear()}
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
