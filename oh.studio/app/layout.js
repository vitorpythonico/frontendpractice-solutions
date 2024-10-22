import localFont from "next/font/local";
import "./globals.css";

const neueMontreal = localFont({
	src: [
		{
			path: './fonts/NeueMontreal-Regular.otf',
			weight: '400',
		},
		{
			path: './fonts/NeueMontreal-Medium.otf',
			weight: '500',
		}
	],
	display: 'swap',
	variable: '--font-neue-montreal',
});

export const metadata = {
  title: "OH.STUDIO",
  description: "A brand and product designer working with clients globally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
