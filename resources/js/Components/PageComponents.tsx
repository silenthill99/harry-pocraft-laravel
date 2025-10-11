import React, {HTMLAttributes, PropsWithChildren} from 'react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import {cn} from "@/lib/utils";

type PaginateComponentsProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

const PageComponents = ({children, className, ...mainProps}: PaginateComponentsProps) => {
    return (
        <section className={"min-h-screen flex flex-col"}>
            <Header/>
            <main className={cn("container mx-auto grow", className)} {...mainProps}>
                {children}
            </main>
            <Footer/>
        </section>
    );
};

export default PageComponents;
