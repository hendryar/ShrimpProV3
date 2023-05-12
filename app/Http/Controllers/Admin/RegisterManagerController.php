<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Validator;

class RegisterManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return Inertia::render('Admin/Users/Index', ['users' => $users]);
    }
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function create()
    {
        return Inertia::render('Admin/Users/Create');
    }
    
    
  
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit($id)
    {
        $user = User::findOrFail($id);
        error_log(json_encode($user));
        return Inertia::render('Admin/Users/Edit', [
            
            'editedUser' => $user
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
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'employee_id' => 'required|string|max:255',
        ])->validate();
        
        User::find($id)->update($request->all());
        return dd($request->all());
    }
        // return redirect()->route('manageusers.index')->with('success', 'User updated successfully');    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {
        User::find($id)->delete();
        return redirect()->route('manageusers.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    // public function store(Request $request) : RedirectResponse
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:'.User::class,
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //         'phone' => 'required|string|max:255',
    //         'address' => 'required|string|max:255',
    //         'employee_id' => 'required|string|max:255',
    //     ]);

        // $user = User::create([
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        //     'phone' =>$request->phone,
        //     'address' =>$request->address,
        //     'employee_id' =>$request->employee_id,
        // ]);
    //     event(new Registered($user));
    //     return redirect()->route('manageusers.index');
    // }

   
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'employee_id' => 'required|string|max:255',
        ])->validate();
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' =>$request->phone,
            'address' =>$request->address,
            'employee_id' =>$request->employee_id,
        ]);
        event(new Registered($user));   
        // return redirect()->route('manageusers.index');
    }

    
}
