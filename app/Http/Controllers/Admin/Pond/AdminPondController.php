<?php

namespace App\Http\Controllers\Admin\Pond;

use App\Models\pond;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
Use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class AdminPondController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ponds = Pond::all();
        return Inertia::render('Admin/Ponds/Index', ['ponds' => $ponds]);
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Admin/Ponds/Create');
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
    
        return redirect()->route('adminponds.index');
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit($id)
    {
        $pond = Pond::findOrFail($id);
        return Inertia::render('Admin/Ponds/Edit', [
            'pond' => $pond
        ]);
        // return dd($pond);
    } 
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'name' => ['required'],
            'area' => ['required'],
            'shrimpbreed' => ['required'],
            'tonnage' => ['required'],
        ])->validate();
    
        Pond::find($id)->update($request->all());
        // return redirect()->route('adminponds.index');
        //return back to admin pond index route page with success message
        return redirect()->route('adminponds.index')->with('success', 'Pond updated successfully');    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Pond::find($id)->delete();
        return redirect()->route('adminponds.index');
    }
}
