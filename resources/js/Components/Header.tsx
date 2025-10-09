import React from 'react';
import {Link, usePage} from "@inertiajs/react";

const Header = () => {

    const isActive = (link: string) => (`hover:underline px-2 ${route().current(link) && "border-x"}`);

    return (
        <header className="border-b-2">
            <div className={"container mx-auto flex items-center justify-between"}>
                <h1>Harry PoCraft</h1>
                <nav>
                    <Link href={route("accueil")} className={isActive("accueil")}>Accueil</Link>
                    <Link href={route("images")} className={isActive("images")}>Images</Link>
                    <Link href={route("reglement")} className={isActive("reglement")}>Règlement intérieur</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
