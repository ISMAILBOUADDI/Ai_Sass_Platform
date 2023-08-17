import { Button } from "@/components/ui/button";
import Link  from "next/link";

const LandingPage = () => {
    return ( 
        <>
            <p className="text-6xl text-orange-600">hello world from ai sass landing</p>
             <div>
                <Link href="/sign-in">
                    <Button>
                        login
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        register
                    </Button>
                </Link>
            </div>
        </>
        
     );
}
 
export default LandingPage;