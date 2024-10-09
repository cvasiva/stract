
import '../globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: 'Stract',
  description: '',
}

export default function RestaurantLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-[#FFFFFF]">
        <div className="w-full bg-white">
          {children}
        </div>
      </body>
    </html >
  )
}
