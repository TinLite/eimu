// import "/globals.css";
import Sidebar from '@/app/components/Sidebar';
import '@/app/globals.css';

export const metadata = {
  title: {
    template: '%s | Project Eimu',
    default: 'Project Eimu'
  },
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {children}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>
    </body>
  )
}
