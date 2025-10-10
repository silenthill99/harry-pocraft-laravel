import {Head} from '@inertiajs/react';
import PageComponents from "@/Components/PageComponents";

export default function Welcome() {
    return (
        <PageComponents>
            <Head title="Welcome" />
            <p>
                Bienvenue sur mon site dédié à mon serveur Minecraft sur le thème d'Harry Potter.
            </p>
        </PageComponents>
    );
}
