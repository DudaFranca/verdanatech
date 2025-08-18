<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TicketController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
  Route::get('/user', function (Request $request) {
    return $request->user();
  });

  Route::get('/tickets', [TicketController::class, 'index']);
  Route::post('/tickets', [TicketController::class, 'store']);
  Route::post('/tickets/{id}', [TicketController::class, 'update']);
});
