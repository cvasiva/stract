
import '../globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: 'Stract',
  description: '',
}

export default function RestaurantLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-[#FFFFFF]">
        <div className="bg-white" style={{ width: "100%", overflowX: 'hidden' }}>
          {children}
        </div>
      </body>
    </html >
  )
}
