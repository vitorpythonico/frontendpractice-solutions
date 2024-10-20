import localFont from "next/font/local";
import "./globals.css";

const GT_America = localFont({
	src: [
		{
			path: './public/fonts/GT-America-Standard-Regular-Trial.otf',
			weight: '400'
		},
		{
			path: './public/fonts/GT-America-Standard-Bold-Trial.otf',
			weight: '700'
		}
	],
	display: 'swap',
	variable: '--font-gt_america'
});

export const metadata = {
  title: "Abstract",
  description: "Design together, in real-time with version control for Sketch. Collaborate in the same file at the same time, without losing the original.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GT_America.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
