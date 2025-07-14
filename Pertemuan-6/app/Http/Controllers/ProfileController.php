<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Profiler\Profile;

class ProfileController extends Controller
{
    public function index(){
        return view("profile");
    }
    
    public function indentity(){
        return view("identity");
    }
    
    public function family(){
        return view("family");
    }
}
