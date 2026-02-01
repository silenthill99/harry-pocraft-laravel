import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import {Form, Head, Link} from '@inertiajs/react';
import {login, register} from "@/routes";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";

export default function Register() {

    return (
        <GuestLayout>
            <Head title="Register" />

            <Form {...register.form()} resetOnSuccess={['password', 'password_confirmation']}>
                {({errors, processing}) => (
                    <div>
                        <div>
                            <Label htmlFor="name">Name</Label>

                            <Input
                                id="name"
                                name="name"
                                className="mt-1 block w-full"
                                autoComplete="name"
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="email">Email</Label>

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                className="mt-1 block w-full"
                                autoComplete="username"
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="password">Password</Label>

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label
                                htmlFor="password_confirmation"
                            >Confirm Password</Label>

                            <Input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                required
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-end">
                            <Link
                                href={login()}
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </div>
                )}
            </Form>
        </GuestLayout>
    );
}
