<?php

namespace App\Http\Controllers;

use App\Models\pond;
use Illuminate\Http\Request;
Use Inertia\Inertia;

class PondController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ponds = Pond::all();
        return inertia::render('Pondpage',[
            'ponds' => $ponds,
            'title' => 'Ponds',
            'description' => 'All available ponds',
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(pond $pond)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(pond $pond)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, pond $pond)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(pond $pond)
    {
        //
    }
}
