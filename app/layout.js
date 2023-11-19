
import './globals.css'


export const metadata = {
  icons: {
    icon: "./icon.png",
  },
  title: "Api Projects",
  description: "This website contain api projects",
  generator: "Next.js",
  applicationName: "Api Project",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Api Project",
    "Api",
    "Free Apis",
  ],
  authors: [
    { name: "suraj singh" },
    { name: "suraj singh", url: "https://www.linkedin.com/in/surajsinghgore" },
  ],
  creator: "suraj singh",
  publisher: "suraj singh",
  viewport: "width=device-width, initial-scale=1",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
