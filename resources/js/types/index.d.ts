export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

/**
 * Données partagées disponibles sur toutes les pages Inertia
 * Ces données sont automatiquement injectées par HandleInertiaRequests middleware
 */
export interface SharedData {
    name: string;
    quote: {message: string; author: string}
    auth: {
        user: User;
    };
    [key: string]: unknown
}

/**
 * Props de page personnalisées (hérite de SharedData)
 * Utilisez ceci pour typer les props spécifiques à une page
 *
 * @example
 * // Dans une page
 * const { mustVerifyEmail, status } = usePage<PageProps<{ mustVerifyEmail: boolean; status?: string }>>().props;
 */
