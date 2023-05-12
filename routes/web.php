<?php
use App\Http\Controllers\Admin\Pond\AdminPondController;
use App\Http\Controllers\Manager\Pond\ManagerPondController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', function () {
    return Inertia::render('Guest/LandingPage',[

    ]);
});

// Route::resource('adminponds', AdminPondController::class);
// Route::resource('managerponds', ManagerPondController::class);
// Route::resource('manageusers', App\Http\Controllers\Admin\RegisterManagerController::class);


//managerponds


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


// Route::get('/admin_dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('admin.dashboard')->middleware(['auth']);

// Route::get('/manager_dashboard', [App\Http\Controllers\Manager\DashboardController::class, 'index'])->name('manager.dashboard')->middleware(['auth', 'verified']);


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
