import React from 'react';
import {Head, router, usePage} from "@inertiajs/react";
import PageComponents from "@/Components/PageComponents";
import {Image} from "@/types";
import {Button} from "@/Components/ui/button";
import images from "@/routes/images";

const Index = () => {
    const {imgs} = usePage<{imgs: Image[]}>().props
    return (
        <PageComponents>
            <Head title={"Quelques images"}/>
            <h2>Images</h2>
            <Button onClick={() => router.visit(images.create())}>Ajouter une image</Button>
            {imgs.length > 0 ? (
                imgs.map(image => (
                    <img key={image.id} src={image.image_path} alt={image.image_path}/>
                ))
            ) : (
                <p>La construction de la map n'ayant pas encore commencée, le portfolio est actuellement vide. Merci de
                    votre compréhension</p>
            )}

        </PageComponents>
    );
};

export default Index;
