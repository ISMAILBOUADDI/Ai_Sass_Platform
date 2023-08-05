import Sidbar from "@/components/sidbar";
import Navbar from "@/components/ui/navbar";

const DashboardLayout = ({
    children }: {
    children : React.ReactNode;
}) => {
    return ( 
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 z-[80] bg-gray-900">
                <Sidbar/>
            </div>
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
     );
}
 
export default DashboardLayout;