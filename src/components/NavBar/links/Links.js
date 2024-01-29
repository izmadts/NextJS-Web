import Link from "next/link";

const Links = () => {

    const Links = [
        {
        title: 'Home',
        path: '/',
        },
        {
        title: 'About Us',
        path: '/aboutus',
        },
        {
        title: 'Blog',
        path: '/blog',
        },
        {
        title: 'Contact',
        path: '/contactus',
        },
   ];
    return (
        <div>
        {Link.map((
            link=>(
               <Link href={link.path} key={link.title}> {link.title} </Link>
            )
        ))}
        </div>
    )
};
export default Links;