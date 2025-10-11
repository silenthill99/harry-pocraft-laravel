<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ImageController extends Controller
{
    public function index()
    {
        $imgs = Image::all();
        return Inertia::render('Images/Index', compact('imgs'));
    }
}
