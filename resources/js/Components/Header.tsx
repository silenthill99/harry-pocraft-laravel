import React from 'react';
import {Link, usePage} from "@inertiajs/react";
import {accueil, dashboard, login, register, reglement} from "@/routes";
import images from "@/routes/images";
import {SharedData} from "@/types";

const Header = () => {

    const { component } = usePage();

    const navigationLinks = [
        {
            label: "Accueil",
            route: accueil(),
            path: "Welcome"
        },
        {
            label: "Images",
            route: images.index(),
            path: "Images/Index"
        },
        {
            label: "Règlement intérieur",
            route: reglement(),
            path: "Règlement"
        }
    ]
    const isActive = (link: string) => (`hover:underline px-2 ${component === link && "border-x border-black"}`);

    const {auth} = usePage<SharedData>().props

    return (
        <header className="border-b-2">
            <div className={"container mx-auto flex items-center justify-between"}>
                <h1>Harry PoCraft</h1>
                {auth.user ? (
                    <Link href={dashboard()}>Tableau de bord</Link>
                ) : (
                    <nav>
                        <ul className={"flex items-center gap-2"}>
                            <li><Link href={login()}>Se connecter</Link></li>
                            <li><Link href={register()}>Créer un compte</Link></li>
                        </ul>
                    </nav>
                )}
                <nav>
                    {navigationLinks.map((link, index) => (
                        <Link key={index} href={link.route} className={isActive(link.path)}>{link.label}</Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
