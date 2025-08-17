<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $table = 'ticket';

    protected $fillable = [
        'name_applicant',
        'category',
        'title',
        'description',
        'status',
        'priority',
    ];
}
