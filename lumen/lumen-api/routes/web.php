<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/users', 'UserController@getUsers');

$router->post('/login', 'UserController@login');

$router->post('/create', 'UserController@createUser');

$router->post('/update/{id}', 'UserController@updateUser');

$router->post('/delete/{id}', 'UserController@deleteUser');

// products
$router->post('/addproduct', 'ProductController@addProduct');

$router->post('/updatestock/{id}', 'ProductController@updateStock');

$router->post('/updatestatus/{id}', 'ProductController@updateStatus');

$router->post('/products', 'ProductController@productsList');
