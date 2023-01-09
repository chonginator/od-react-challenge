import Layout from "../components/Layout";

const App = ({ Component: ActivePage, pageProps }) => {
  return (
    <Layout>
      <ActivePage {...pageProps} />
    </Layout>
  );
};

export default App;
