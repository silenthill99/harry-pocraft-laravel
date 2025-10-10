import React from 'react';
import {Link, usePage} from "@inertiajs/react";
import {accueil, images, reglement} from "@/routes";

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
            route: images(),
            path: "Images"
        },
        {
            label: "Règlement intérieur",
            route: reglement(),
            path: "Règlement"
        }
    ]
    const isActive = (link: string) => (`hover:underline px-2 ${component === link && "border-x border-black"}`);

    return (
        <header className="border-b-2">
            <div className={"container mx-auto flex items-center justify-between"}>
                <h1>Harry PoCraft</h1>
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
