<?php

namespace App\Http\Controllers\Manager\Pond;


use App\Models\pond;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
Use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class ManagerPondController extends Controller
{
    //
    public function index()
    {
        $ponds = Pond::all();
        return Inertia::render('Manager/Ponds/Index', ['ponds' => $ponds]);
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Manager/Ponds/Create');
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
        return redirect()->route('managerponds.index');
    }
  
    /**
     * Write code on Method
     *
     * @return response()
    //  */
    
    public function edit($id)
    {
        $pond = Pond::findOrFail($id);
        return Inertia::render('Manager/Ponds/Edit', [
            'pond' => $pond
        ]);
    } 


     /**
      * 
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
     }


    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        Pond::find($id)->delete();
        return redirect()->route('managerponds.index');
    }
}
