import '../styles/globals.css'
import Header from '../components/header'
import { Auth0Provider } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="yasinilkalp.us.auth0.com"
      clientId="Hfy3aYwnC1RqG53fCttZHxSNaBwady1R"
      redirectUri={process.env.NEXT_PUBLIC_URL}
    >
      <div className="antialiased text-gray-700">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Auth0Provider>
  )
}

export default MyApp
