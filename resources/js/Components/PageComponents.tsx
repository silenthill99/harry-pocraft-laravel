import React, {PropsWithChildren} from 'react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const PageComponents = (props: PropsWithChildren) => {
    return (
        <section className={"min-h-screen flex flex-col"}>
            <Header/>
            <main className={"container mx-auto grow"}>
                {props.children}
            </main>
            <Footer/>
        </section>
    );
};

export default PageComponents;
