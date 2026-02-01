<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'image_path' => $this->resource->image_path,
            'title' => $this->resource->title,
            'slug' => $this->resource->slug,
            'user' => new UserResource($this->whenLoaded('user')),
        ];
    }
}
