import React from 'react';
import {FaDiscord} from "react-icons/fa";
import {SiFandom} from "react-icons/si";

const Footer = () => {
    return (
        <footer className={"container mx-auto flex py-5"}>
            <a href="https://discord.gg/c5sUqgQre2" target="_blank" rel="noreferrer" className={"hover:opacity-70"}>
                <FaDiscord className={"w-8 h-8"}/></a>
            <a href="https://harrypotter.fandom.com/fr/wiki/Wiki_Harry_Potter" target="_blank"
               rel="noreferrer" className={"hover:opacity-70"}><SiFandom className={"w-8 h-8"}/></a>
        </footer>
    );
};

export default Footer;
