import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from '../../../../wayfinder'
/**
* @see \App\Http\Controllers\ImageController::create
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/images/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImageController::create
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImageController::create
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::create
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImageController::create
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::create
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::create
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\ImageController::store
* @see app/Http/Controllers/ImageController.php:0
* @route '/images'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/images',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ImageController::store
* @see app/Http/Controllers/ImageController.php:0
* @route '/images'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImageController::store
* @see app/Http/Controllers/ImageController.php:0
* @route '/images'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImageController::store
* @see app/Http/Controllers/ImageController.php:0
* @route '/images'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImageController::store
* @see app/Http/Controllers/ImageController.php:0
* @route '/images'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ImageController::edit
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}/edit'
*/
export const edit = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/images/{image}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImageController::edit
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}/edit'
*/
edit.url = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { image: args }
    }

    if (Array.isArray(args)) {
        args = {
            image: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        image: args.image,
    }

    return edit.definition.url
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImageController::edit
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}/edit'
*/
edit.get = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::edit
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}/edit'
*/
edit.head = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImageController::edit
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}/edit'
*/
const editForm = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::edit
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}/edit'
*/
editForm.get = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::edit
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}/edit'
*/
editForm.head = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\ImageController::update
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
export const update = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/images/{image}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ImageController::update
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
update.url = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { image: args }
    }

    if (Array.isArray(args)) {
        args = {
            image: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        image: args.image,
    }

    return update.definition.url
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImageController::update
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
update.put = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ImageController::update
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
update.patch = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ImageController::update
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
const updateForm = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImageController::update
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
updateForm.put = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImageController::update
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
updateForm.patch = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\ImageController::destroy
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
export const destroy = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/images/{image}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ImageController::destroy
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
destroy.url = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { image: args }
    }

    if (Array.isArray(args)) {
        args = {
            image: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        image: args.image,
    }

    return destroy.definition.url
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImageController::destroy
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
destroy.delete = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ImageController::destroy
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
const destroyForm = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ImageController::destroy
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
destroyForm.delete = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

/**
* @see \App\Http\Controllers\ImageController::index
* @see app/Http/Controllers/ImageController.php:11
* @route '/images'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/images',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImageController::index
* @see app/Http/Controllers/ImageController.php:11
* @route '/images'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImageController::index
* @see app/Http/Controllers/ImageController.php:11
* @route '/images'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::index
* @see app/Http/Controllers/ImageController.php:11
* @route '/images'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImageController::index
* @see app/Http/Controllers/ImageController.php:11
* @route '/images'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::index
* @see app/Http/Controllers/ImageController.php:11
* @route '/images'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::index
* @see app/Http/Controllers/ImageController.php:11
* @route '/images'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ImageController::show
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
export const show = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/images/{image}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ImageController::show
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
show.url = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { image: args }
    }

    if (Array.isArray(args)) {
        args = {
            image: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        image: args.image,
    }

    return show.definition.url
            .replace('{image}', parsedArgs.image.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ImageController::show
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
show.get = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::show
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
show.head = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ImageController::show
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
const showForm = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::show
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
showForm.get = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ImageController::show
* @see app/Http/Controllers/ImageController.php:0
* @route '/images/{image}'
*/
showForm.head = (args: { image: string | number } | [image: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const ImageController = { create, store, edit, update, destroy, index, show }

export default ImageController
