import React from 'react';
import {Head} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";

const Images = () => {
    return (
        <PageComponents>
            <Head title={"Quelques images"}/>
            <h2>Images</h2>
            <p className="info">La construction de la map n'ayant pas encore commencée, le portfolio est actuellement vide. Merci de
                votre compréhension</p>
        </PageComponents>
    );
};

export default Images;
