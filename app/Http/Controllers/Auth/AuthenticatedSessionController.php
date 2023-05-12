<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        // return redirect()->intended(RouteServiceProvider::HOME);
        $role = Auth::user()->role;
                switch($role){
                    case 'admin':
                        if(url()->previous() == 'http://localhost:8000/admin_dashboard'){
                            return redirect(RouteServiceProvider::REGISTER);
                        }else{
                            return redirect(RouteServiceProvider::ADMIN);
                        }
                    case 'manager':
                        return redirect(RouteServiceProvider::MANAGER);
                    // default:
                    //     return redirect(RouteServiceProvider::HOME);
                }//end
                // switch($role){
                //     case 'admin':
                //         return redirect()->intended(RouteServiceProvider::ADMIN);
                //     case 'manager':
                //         return redirect()->intended(RouteServiceProvider::MANAGER);
                //     default:
                //         return redirect()->intended(RouteServiceProvider::HOME);
                // }//end
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
