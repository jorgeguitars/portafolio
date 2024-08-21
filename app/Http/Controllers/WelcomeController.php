<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkillResource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\skill;

class WelcomeController extends Controller
{
    public function welcome()
    {
       $skills=SkillResource::collection(Skill::all());
       return Inertia::render('Welcome', compact('skills'));

    }
}
