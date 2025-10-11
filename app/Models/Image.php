<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Image extends Model
{
    protected $fillable = [
        'image_path',
        'title',
        'slug'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected static function booted(): void
    {
        static::creating(function ($image) {
            $image->slug = Str::slug($image->title);
        });
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
