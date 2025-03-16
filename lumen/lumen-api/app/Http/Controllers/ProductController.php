<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Exception;

class ProductController extends Controller
{
    public function productsList(){
        $products = DB::table('products')->get();

        return response()->json($products);
    }
    public function addProduct(Request $request)
    {
        try {
            // Validate request manually to handle errors properly
            $validator = Validator::make($request->all(), [
                'category' => 'required|string',
                'product' => 'required|string',
                'price' => 'required|integer',
                'stock' => 'required|integer',
                'status' => 'required|string'
            ]);

            // If validation fails, return response with error messages
            if ($validator->fails()) {
                return response()->json([
                    "success" => false,
                    "message" => "Validation failed",
                    "errors" => $validator->errors()
                ], 422);
            }

            // Insert product into database
            DB::table('products')->insert([
                'category' => $request->category,
                'product' => $request->product,
                'price' => $request->price,
                'stock' => $request->stock,
                'status' => $request->status,
            ]);

            return response()->json([
                "success" => true,
                "message" => "Product added successfully"
            ], 201);

        } catch (Exception $ex) {
            return response()->json([
                "success" => false,
                "message" => "Something went wrong",
                "error" => $ex->getMessage()
            ], 500);
        }
    }

    public function updateStock($id, Request $request){

        try{
            $validator = Validator::make(
                ['id' => $id] + $request->all(), // Merge route `id` with request data
                [
                    'id' => 'required|integer|exists:products,id', // Validate route ID
                    'quantity' => 'required|integer|min:1'
                ]
            );

            if ($validator->fails()) {
                return response()->json([
                    "success" => false,
                    "message" => "Validation failed",
                    "errors" => $validator->errors()
                ], 422);
            }

            $product = DB::table('products')->where('id', $id)->first();

            if (!$product || $product->stock < $request->quantity) {
                return response()->json([
                    "success" => false,
                    "message" => "Insufficient stock available"
                ], 400);
            }

            DB::table('products')
                ->where('id', $id)
                ->update([
                    'stock' => $product->stock - $request->quantity
                ]);

            return response()->json([
                "success" => true,
                "message" => "Purchase successful, stock updated",
                "remaining_stock" => $product->stock - $request->quantity
            ], 200);

        } catch (Exception $ex) {
            return response()->json([
                "success" => false,
                "message" => "Something went wrong",
                "error" => $ex->getMessage()
            ], 500);
        }
    }

    public function updateStatus($id){

        try {
            $product = DB::table('products')->where('id', $id)->first();

            if(!$product){
                return response()->json([
                    "success" => false,
                    "message" => "Product not found"
                ], 404);
            }

            DB::table('products')
                ->where('id', $id)
                ->update([
                    'status' => DB::raw("CASE WHEN status = 'active' THEN 'inactive' ELSE 'active' END")
                ]);

                $updatedProduct = DB::table('products')->where('id', $id)->first();

                return response()->json([
                    "success" => true,
                    "message" => "Product status updated",
                    "product_status" => $updatedProduct->status // Now shows the updated value
                ], 200);

        } catch (Exception $ex) {
            return response()->json([
                "success" => false,
                "message" => "Something went wrong",
                "error" => $ex->getMessage()
            ], 500);
        }
    }
}
