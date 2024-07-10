import { Link } from "@inertiajs/react";

export default function Pagination({ links,params }) {
    delete params['page'];
    const queryString = new URLSearchParams(params);
    
    return (
      
        <nav className="text-center mt-4">
             {/* {JSON.stringify(params)} */}
            {links.map((link) => (
               
                <Link
                    preserveScroll
                    href={`${link.url || ''}&${queryString}`} 
                   
                    // href={`${queryString}`} 
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
                        (link.active ? " bg-gray-950 " : " ") +
                        (!link.url
                            ? "!text-gray-500 cursor-not-allowed"
                            : "hover:bg-gray-950")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}
