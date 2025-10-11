export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Auth {
    user: User;
}

export interface Image {
    id: number;
    user: User;
    image_path: string;
}

export interface SharedData {
    name: string;
    quote: {message: string; author: string}
    auth: Auth
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
