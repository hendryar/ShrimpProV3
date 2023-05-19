<?php
use App\Http\Controllers\Admin\Pond\AdminPondController;
use App\Http\Controllers\Manager\Pond\ManagerPondController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;





// et('/', function () {
//     return Inertia::render('Guest/LandingPage',[

//     ]);
// });

Route::get('/', function () {
    if (Auth::check()) {
        if(Auth::user()->role == 'admin'){
            return redirect('/admin_dashboard');
        }else if(Auth::user()->role == 'manager'){
            return redirect('/manager_dashboard');
        }
    } else {
        return Inertia::render('Guest/LandingPage');
    }
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::group(['middleware' => ['auth']], function () {
        // ...
        Route::group(['middleware' => ['manager']], function () {
            // Routes accessible only to managers
            Route::get('/manager_dashboard', [App\Http\Controllers\Manager\DashboardController::class, 'index'])->name('manager.dashboard')->middleware(['auth', 'verified']);
            Route::resource('managerponds', ManagerPondController::class);
        });
        Route::group(['middleware' => ['admin']], function () {
            // Routes accessible only to admins
            Route::get('/admin_dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.dashboard')->middleware(['auth']);
            Route::resource('adminponds', AdminPondController::class);
            Route::resource('manageusers', App\Http\Controllers\Admin\RegisterManagerController::class);
        });
    });
});

require __DIR__.'/auth.php';
