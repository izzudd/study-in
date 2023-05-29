<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseTaken extends Model
{
    use HasFactory;
    protected $table = 'courses_taken';
    protected $fillable = [
        'user_id',
        'course_id',
    ];
}
