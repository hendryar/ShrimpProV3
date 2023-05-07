<?php

namespace App\Http\Controllers\Pond;

use App\Models\pond;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
Use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class PondController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ponds = Pond::all();
        return Inertia::render('Ponds/Index', ['ponds' => $ponds]);
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Ponds/Create');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'name' => ['required'],
            'area' => ['required'],
            'tonnage' => ['required'],
            'shrimpbreed' => ['required'],
            
        ])->validate();
   
        Pond::create($request->all());
    
        return redirect()->route('ponds.index');
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(Pond $pond)
    {
        return Inertia::render('Ponds/Edit', [
            'pond' => $pond
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'title' => ['required'],
            'body' => ['required'],
        ])->validate();
    
        Pond::find($id)->update($request->all());
        return redirect()->route('ponds.index');
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Pond::find($id)->delete();
        return redirect()->route('ponds.index');
    }
}
