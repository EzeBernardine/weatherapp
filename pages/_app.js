import "../styles/globals.css";
import { ProviderContext } from "../state/provider";
import Head from "next/head";
import { theme } from "../config/theme";
import { ThemeProvider } from "styled-components";
import React from "react";
 
 



function MyApp({ Component, pageProps }) {
	
 

	return (
		<>
			<Head>

				<link rel="icon" href="../public/favicon_io/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="../public/favicon_io/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon_io/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon_io/favicon-16x16.png" />
				<link rel="manifest" href="../public/favicon_io/site.webmanifest" />
				 

				<meta property="og:type" content="website" />
				<meta property="og:author" content="weather-app" />
				<meta property="og:title" content="weather-app" />
				<meta property="og:description" content="A simpler way to send and receive money from abroad." />
				<meta property="og:image" content="https://res.cloudinary.com/weather-app-au/image/" />
				<meta property="og:image:alt" content="weather-app" />
				<meta name="description" content="A simpler way to send and receive money from abroad." />
				<meta name="keywords" content="weather-app, transfer money" />
				<title> Weather app</title>
			</Head>

			<ProviderContext>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</ProviderContext>

			
		</>
	);
}

export default MyApp;

