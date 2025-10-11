<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ImageController extends Controller
{
    public function index()
    {
        $imgs = Image::with('user')->get();
        return Inertia::render('Images/Index', compact('imgs'));
    }

    public function create()
    {
        return Inertia::render('Images/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:8000',
            'title' => 'required|string|max:255'
        ]);
        $image = $request->file('image');
        $imageName = time().'_'.$image->getClientOriginalName();
        $imagePath =  $image->storeAs('images', $imageName, 'public');

        unset($data['image']);

        $data['image_path'] = $imagePath;

        Auth::user()->images()->create($data);

        return Redirect::route('images.index');
    }
}
