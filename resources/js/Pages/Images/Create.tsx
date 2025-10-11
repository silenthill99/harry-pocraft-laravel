import React from 'react';
import PageComponents from "@/Components/PageComponents";
import {Form} from "@inertiajs/react";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import InputError from "@/Components/InputError";
import ImageController from "@/actions/App/Http/Controllers/ImageController";

const Create = () => {
    return (
        <PageComponents className={"items-center flex"}>
            <Form className={"grow"} {...ImageController.store.form()}>
                {({errors}) => (
                    <>
                        <div className={"mb-4"}>
                            <Label htmlFor={"title"}>Mettez un nom</Label>
                            <Input
                                id={"title"}
                                name={"title"}
                                placeholder={"Mettez un nom"}
                            />
                            <InputError message={errors.title}/>
                        </div>
                        <div className={"mb-4"}>
                            <Label htmlFor={"img"}>Choix de l'image</Label>
                            <Input
                                id={"img"}
                                type={"file"}
                                accept={"image/*"}
                                name={"image"}
                            />
                            <InputError message={errors.image}/>
                        </div>
                        <Button type={"submit"}>Envoyer</Button>
                    </>
                )}
            </Form>
        </PageComponents>
    );
};

export default Create;
